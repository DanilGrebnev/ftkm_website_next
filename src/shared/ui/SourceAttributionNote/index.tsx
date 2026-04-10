import clsx from "clsx";
import { ReactNode } from "react";

import s from "./SourceAttributionNote.module.scss";

/**
 * SourceAttributionNote — компактный блок-примечание для указания источника медиа или текста.
 * Используйте компонент сразу под контентом, чтобы подчеркнуть, что материал получен из открытых источников.
 */
export interface SourceAttributionNoteProps {
  url: string;
  className?: string;
  children?: ReactNode;
}

export function SourceAttributionNote({
  url,
  className,
  children,
}: SourceAttributionNoteProps) {
  return (
    <a
      className={clsx(s.note, className)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={s.prefix}>
        {children ?? "материал взят из открытых источников:"}
      </span>
      <em className={clsx(s.linkWrap, s.ellipsis)}>{url}</em>
    </a>
  );
}
