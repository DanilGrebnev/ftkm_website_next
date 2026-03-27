"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import s from "./VidstackPlayer.module.scss";

export interface VidstackPlayerProps {
  src: string;
  title: string;
  poster?: string;
  className?: string;
}

let elementsPromise: Promise<void> | null = null;

function ensureVidstackElements(): Promise<void> {
  if (!elementsPromise) {
    elementsPromise = import("vidstack/elements").then(
      ({ defineCustomElements }) => defineCustomElements(),
    );
  }
  return elementsPromise;
}

export function VidstackPlayer({
  src,
  title,
  poster,
  className,
}: VidstackPlayerProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void ensureVidstackElements().then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return <div className={clsx(s.skeleton, className)} aria-hidden />;
  }

  return (
    <div className={clsx(s.wrap, className)}>
      <media-player
        src={src}
        title={title}
        poster={poster}
        preload="metadata"
        load="visible"
      >
        <media-outlet />
        <media-community-skin />
      </media-player>
    </div>
  );
}
