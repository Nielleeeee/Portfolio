import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Hotjar from "@/lib/hotjar";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <Hotjar />
      {children}
    </div>
  );
}
