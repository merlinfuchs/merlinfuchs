"use client";

import { useEffect } from "react";
import * as swetrix from "swetrix";

// Global flag to ensure Swetrix is only initialized once
let swetrixInitialized = false;

export default function SwetrixAnalytics() {
  useEffect(() => {
    // Only initialize if not already initialized
    if (!swetrixInitialized) {
      swetrix.init("J5f9TOyaRqyB", {
        apiURL: "https://swetrix.vaven.io/log",
      });
      swetrix.trackViews();
      swetrix.trackErrors({
        sampleRate: 1,
      });

      // Mark as initialized
      swetrixInitialized = true;
    }
  }, []);

  // This component doesn't render anything
  return null;
}
