import type { Metadata } from "next";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import { soraSans } from "@/common/styles/fonts";

import { METADATA } from "@/common/constant/metadata";

import Layouts from "@/common/components/layouts";

import ThemeProviderContext from "@/stores/theme";
import { url } from "inspector";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.DOMAIN || ""),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={soraSans.className}>
        <NextTopLoader
          color="#05B6D3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05B6D3, 0 0 5px #45C6C0"
          showSpinner
          crawl
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
        <GoogleAnalytics measurementId={process.env.GTM_ID || ""} />
      </body>
    </html>
  );
}
