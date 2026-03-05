# Zoom Events API Setup Guide

## 1. Create a Server-to-Server OAuth App

1. Go to the [Zoom Marketplace](https://marketplace.zoom.us/)
2. Click **Develop** → **Build App**
3. Choose **Server-to-Server OAuth** and click **Create**
4. Name it something like "Webinar Registration"
5. On the **App Credentials** page, copy these three values:
   - **Account ID** → `ZOOM_ACCOUNT_ID`
   - **Client ID** → `ZOOM_CLIENT_ID`
   - **Client Secret** → `ZOOM_CLIENT_SECRET`

## 2. Add Required Scopes

1. In your app, go to the **Scopes** tab
2. Search for and add: `zoom_events:write:ticket`
3. If that scope doesn't appear in the list, you'll need to [contact Zoom Developer Support](https://devsupport.zoom.us/) to have it enabled for your account — it's part of the Zoom Events API which isn't available on all plans
4. Click **Save**
5. Go to the **Activation** tab and activate the app

## 3. Find Your Event ID and Ticket Type ID

### Option A — Via the Zoom Events Portal

1. Go to [Zoom Events](https://events.zoom.us/) and open your event
2. The **Event ID** is in the URL: `https://events.zoom.us/e/view/.../{eventId}/...`

### Option B — Via the API (more reliable)

```bash
# Get an access token
TOKEN=$(curl -s -X POST "https://zoom.us/oauth/token" \
  -H "Authorization: Basic $(echo -n 'YOUR_CLIENT_ID:YOUR_CLIENT_SECRET' | base64)" \
  -d "grant_type=account_credentials&account_id=YOUR_ACCOUNT_ID" \
  | jq -r '.access_token')

# List your events to find the event ID
curl -s -H "Authorization: Bearer $TOKEN" \
  "https://api.zoom.us/v2/zoom_events/events" | jq '.events[] | {id, name}'

# Once you have the event ID, get ticket types
curl -s -H "Authorization: Bearer $TOKEN" \
  "https://api.zoom.us/v2/zoom_events/events/YOUR_EVENT_ID/ticket_types" | jq '.ticket_types[] | {id, name}'
```

The ticket type ID identifies which ticket tier attendees get (e.g., "Free", "General Admission").

## 4. Configure Environment Variables

### Local development

Populate `app/.env.local`:

```
ZOOM_ACCOUNT_ID=your_account_id_here
ZOOM_CLIENT_ID=your_client_id_here
ZOOM_CLIENT_SECRET=your_client_secret_here
ZOOM_EVENT_ID=your_event_id_here
ZOOM_TICKET_TYPE_ID=your_ticket_type_id_here
```

### Production (Vercel)

1. Go to your project in the [Vercel dashboard](https://vercel.com/)
2. **Settings** → **Environment Variables**
3. Add each of the five variables above
4. Set them for **Production** (and optionally **Preview**) environments
5. Redeploy for the changes to take effect

## 5. Verify It Works

1. Run `npm run dev` locally
2. Fill out the registration form and submit
3. Check the Zoom Events attendee list to confirm the registration appeared
4. Check the registrant's email for the join link from Zoom

## Zoom Plan Requirements

- The Zoom account must have **Zoom Events** (not just Zoom Meetings/Webinars)
- Server-to-Server OAuth apps require a **paid Zoom account** (Pro, Business, or Enterprise)
- The `zoom_events:write:ticket` scope is specific to Zoom Events — if you only have Zoom Webinars, the API endpoint and scope are different
