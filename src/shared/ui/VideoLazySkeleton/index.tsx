"use client";

import s from "./VideoLazySkeleton.module.scss";

export type VideoLazySkeletonProps = {
  variant?: "single" | "grid";
};

export function VideoLazySkeleton({
  variant = "single",
}: VideoLazySkeletonProps) {
  if (variant === "grid") {
    return (
      <div className={s.grid} aria-hidden>
        <div className={s.cell} />
        <div className={s.cell} />
      </div>
    );
  }

  return <div className={s.cell} aria-hidden />;
}
