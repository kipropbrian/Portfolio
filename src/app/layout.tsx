import Background from "@/components/background";
import P from "@/components/ui/p";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Maiyo Portfolio",
  description: "Full Stack Web Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background text-foreground", inter.className)}>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="bb4f9b88-f00b-466a-8df4-bbfbb4312d60"
        ></Script>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "193d452f1e99453faaeda658920ed580"}'
        ></Script>
        <Background />
        {children}
        <P className="text-center pb-5">
          Brian Maiyo - {new Date().getFullYear()}
        </P>
      </body>
    </html>
  );
}
