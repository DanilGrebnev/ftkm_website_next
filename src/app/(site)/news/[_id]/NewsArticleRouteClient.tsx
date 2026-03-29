"use client";

import dynamic from "next/dynamic";

import { ErrorBoundary } from "@/app/Providers";
import { LoadingCircle } from "@UI/LoadingCircle";

const OneNews = dynamic(() => import("@views/OneNews"), {
  loading: () => <LoadingCircle fullScreen />,
});

export function NewsArticleRouteClient() {
  return (
    <ErrorBoundary>
      <OneNews />
    </ErrorBoundary>
  );
}
