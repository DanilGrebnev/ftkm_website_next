import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Montserrat } from "next/font/google";

import "@/shared/styles/index.scss";
import {
  getMetadataBaseUrl,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_OG_IMAGE_PATH,
} from "@/shared/lib/site";
import { AppProviders } from "./ClientProviders";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const metadataBase = getMetadataBaseUrl();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: SITE_DEFAULT_TITLE,
    template: "%s | МиТЛП ВолгГТУ",
  },
  description: SITE_DEFAULT_DESCRIPTION,
  applicationName: "МиТЛП ВолгГТУ",
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_DEFAULT_TITLE,
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    url: metadataBase,
    images: [{ url: SITE_OG_IMAGE_PATH }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className={montserrat.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <AppProviders>{children}</AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
