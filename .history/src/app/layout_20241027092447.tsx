import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import TabloidContextProvider from "@/contexts/tabloid-context-provider";
import { Poppins } from "next/font/google"; // Import the font
import { Toaster } from "@/components/ui/sonner";
import SettingsContextProvider from "@/contexts/settings-context-provider";
import Header from "./components/header";
import { SessionContextProvider } from "@/contexts/sess-context-providres";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Space Typo",
  description: "Typing trainer By Kirill Amirov",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = auth();
  console.log(session);
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased space`}>
        <TabloidContextProvider>
          <SettingsContextProvider>
            <Header />
            <SessionContextProvider>{children}</SessionContextProvider>
          </SettingsContextProvider>
        </TabloidContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
