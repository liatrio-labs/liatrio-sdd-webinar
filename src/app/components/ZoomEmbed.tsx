"use client";

import { ExternalLink } from "lucide-react";

export default function ZoomEmbed() {
  return (
    <a
      href="https://events.zoom.us/ev/AoN705VX7erOi5RxnWG_pA_5Zbnov5OSb1BVfJ1AJJI6sCbfRHhE~AggLXEz2QYFnZdd54ElYFZ5I06Dg?lnk=gMevent"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full bg-accent-green text-white dark:text-grey-800 font-semibold py-3.5 rounded-md hover:brightness-110 transition-[filter] text-base focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2"
    >
      Register on Zoom
      <ExternalLink size={18} aria-hidden="true" />
    </a>
  );
}
