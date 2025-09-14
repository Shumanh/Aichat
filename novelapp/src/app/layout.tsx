import "@/styles/globals.css";
import "@/styles/prosemirror.css";
// import "katex/dist/katex.min.css"; // Removed to avoid CSS ESM loader error

import type { ReactNode } from "react";
import Providers from "@/app/providers";
import { cal, inter } from "@/styles/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cal.variable}`} suppressHydrationWarning>
      <body className="font-default">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}