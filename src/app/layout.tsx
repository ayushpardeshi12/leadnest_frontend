"use client"; // Required for using hooks like usePathname

import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import MainLayout from "./layout_component"; // Import the main layout
import { usePathname } from "next/navigation"; // Import usePathname

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// No RootLayoutProps needed for metadata in app router by default
// export const metadata: Metadata = {
//   title: "LeadNest CRM",
//   description: "Manage your leads efficiently",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Determine if the current page is the login page
  const isLoginPage = pathname === "/"; // Assuming login is at the root

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* Conditionally render MainLayout or just children */}
        {isLoginPage ? (
          children // Render only children for the login page
        ) : (
          <MainLayout>{children}</MainLayout> // Wrap other pages in MainLayout
        )}
      </body>
    </html>
  );
}

