import { NextResponse } from "next/server";

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getZoomToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const accountId = process.env.ZOOM_ACCOUNT_ID;
  const clientId = process.env.ZOOM_CLIENT_ID;
  const clientSecret = process.env.ZOOM_CLIENT_SECRET;

  if (!accountId || !clientId || !clientSecret) {
    throw new Error("Zoom credentials not configured");
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const res = await fetch("https://zoom.us/oauth/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "account_credentials",
      account_id: accountId,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Zoom OAuth failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return cachedToken.token;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const eventId = process.env.ZOOM_EVENT_ID;
    const ticketTypeId = process.env.ZOOM_TICKET_TYPE_ID;

    if (!eventId || !ticketTypeId) {
      return NextResponse.json(
        { error: "Zoom event configuration is missing. Please contact the organizer." },
        { status: 500 }
      );
    }

    const token = await getZoomToken();

    const res = await fetch(
      `https://api.zoom.us/v2/zoom_events/events/${eventId}/tickets`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          attendees: [
            {
              first_name: firstName.trim(),
              last_name: lastName.trim(),
              email: email.trim(),
              ticket_type_id: ticketTypeId,
            },
          ],
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error(`Zoom registration failed (${res.status}):`, text);
      return NextResponse.json(
        { error: "Registration failed. Please try again or register directly on Zoom." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    const message =
      error instanceof Error && error.message === "Zoom credentials not configured"
        ? "Zoom credentials not configured. Please contact the organizer."
        : "An unexpected error occurred. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
