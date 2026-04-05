import { OpenPanelComponent } from "@openpanel/nextjs";

export default function AnalyticsProvider() {
  if (process.env.NODE_ENV !== "production" && typeof window === "undefined") {
    return null;
  }

  return (
    <OpenPanelComponent
      clientId="ca3d3b3b-f097-4fd1-be06-6fc2f19e5cae"
      apiUrl="https://analytics.vaven.io/api"
      trackScreenViews={true}
      trackOutgoingLinks={true}
    />
  );
}
