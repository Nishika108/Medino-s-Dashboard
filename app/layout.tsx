import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medinos Dashboard",
  description: "Created by Nishika Tomar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-white text-black dark:bg-[#121212] dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex flex-col min-h-screen w-full">
              {/* Navbar at the top */}
              <Navbar />

              {/* Main Layout: Sidebar + Main Content */}
              <div className="flex flex-1 w-full overflow-hidden">
                {/* Sidebar */}
                <AppSidebar />

                {/* Main Content */}
                <main className="flex-1 w-full overflow-x-hidden px-4 pb-8">
                  {/* Optional Sidebar Trigger (like hamburger) */}
                  <SidebarTrigger className="mt-4" />
                  
                  {/* Children / Page Content */}
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
