"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import { VideoLazySkeleton } from "@/shared/ui/VideoLazySkeleton";

const PutinIsland = dynamic(() => import("./PutinVideoIsland"), {
  ssr: false,
  loading: () => <VideoLazySkeleton variant="single" />,
});

export function LazyPutinVideo() {
  return (
    <Suspense fallback={<VideoLazySkeleton variant="single" />}>
      <PutinIsland />
    </Suspense>
  );
}
