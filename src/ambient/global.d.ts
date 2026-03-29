declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.ico" {
  const src: string;
  export default src;
}

declare module "*.css";

import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "media-player": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          src?: string;
          poster?: string;
          title?: string;
          preload?: string;
          load?: string;
        },
        HTMLElement
      >;
      "media-outlet": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "media-community-skin": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};
