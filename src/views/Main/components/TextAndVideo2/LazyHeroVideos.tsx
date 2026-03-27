"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import { VideoLazySkeleton } from "@/shared/ui/VideoLazySkeleton";

const VideoListLazy = dynamic(() => import("./VideoList/VideoList"), {
  ssr: false,
  loading: () => <VideoLazySkeleton variant="grid" />,
});

export function LazyHeroVideos() {
  return (
    <Suspense fallback={<VideoLazySkeleton variant="grid" />}>
      <VideoListLazy />
    </Suspense>
  );
}
