"use client";

import { event } from "@/lib/analytics";

export function useAnalytics() {
  const trackSignUp = (email: string) => {
    event({
      action: "sign_up",
      category: "engagement",
      label: email,
    });
  };

  const trackFormOpen = () => {
    event({
      action: "form_open",
      category: "engagement",
      label: "typeform",
    });
  };

  const trackFormClose = (completed: boolean) => {
    event({
      action: "form_close",
      category: "engagement",
      label: completed ? "completed" : "abandoned",
    });
  };

  const trackDemoVideoPlay = () => {
    event({
      action: "demo_video_play",
      category: "engagement",
      label: "hero_video",
    });
  };

  const trackDemoVideoClose = () => {
    event({
      action: "demo_video_close",
      category: "engagement",
      label: "hero_video",
    });
  };

  return {
    trackSignUp,
    trackFormOpen,
    trackFormClose,
    trackDemoVideoPlay,
    trackDemoVideoClose,
  };
}
