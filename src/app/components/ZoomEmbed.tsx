"use client";

export default function ZoomEmbed() {
  return (
    <div className="w-full">
      <iframe
        src="https://events.zoom.us/e/view/preview/hVXGFxT7RNGHNpuMwbOGug/purchase"
        width="100%"
        height="500"
        style={{ border: "none" }}
        title="Register for AI Jumpstart Webinar"
        allow="payment"
      />
    </div>
  );
}
