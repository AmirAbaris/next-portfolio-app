import "~/styles/globals.css";
import '@fontsource/poppins/400.css';
import { NextUIProvider } from "@nextui-org/react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/_components/Navbar";

export const metadata: Metadata = {
  title: "Amir Zarei - Frontend Developer",
  description: "Portfolio website showcasing the work and skills of Amir Zarei.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
