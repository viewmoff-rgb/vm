/* eslint-disable @typescript-eslint/member-delimiter-style */
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViewMarket - AI-Powered Automation Platform",
  description:
    "ViewMarket is the next-generation AI automation platform. Build intelligent workflows, deploy AI agents, connect 500+ apps, and scale your business operations effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(" min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children} <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
