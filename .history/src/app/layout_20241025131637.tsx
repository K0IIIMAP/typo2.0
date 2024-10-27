import type { Metadata } from "next";

import "./globals.css";
import TabloidContextProvider from "@/contexts/tabloid-context-provider";
import SettingsContextProvider from "@/contexts/settings-context-provider";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TabloidContextProvider>
          <SettingsContextProvider>
            <Header />
            {children}
          </SettingsContextProvider>
        </TabloidContextProvider>
      </body>
    </html>
  );
}
