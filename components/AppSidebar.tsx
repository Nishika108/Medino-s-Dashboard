"use client"

import React from "react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  Home,
  UserPlus,
  Users,
  ShoppingCart,
  Warehouse,
  BarChart2,
  Activity,
  Percent,
  UserCircle,
  RotateCcw,
  Truck,
  Mail,
  Stethoscope,
  PackageCheck,
  Tag,
  BellRing,
  Download,
  Settings,
} from "lucide-react"

const items = [
  { title: "Register", url: "#", icon: UserPlus },
  { title: "Pharmacy Admins", url: "#", icon: Users },
  { title: "Retailer Admins", url: "#", icon: ShoppingCart },
  { title: "Warehouse Admins", url: "#", icon: Warehouse },
  { title: "Warehouse Metrics", url: "#", icon: BarChart2 },
  { title: "User Analytics", url: "#", icon: Activity },
  { title: "Offer Analytics", url: "#", icon: Percent },
  { title: "User Master", url: "#", icon: UserCircle },
  { title: "Manage Refund", url: "#", icon: RotateCcw },
  { title: "Delivery Boys", url: "#", icon: Truck },
  { title: "Inbox", url: "#", icon: Mail },
  { title: "Register Doctor", url: "#", icon: Stethoscope },
  { title: "Popular Products", url: "#", icon: PackageCheck },
  { title: "Manage Discount", url: "#", icon: Tag },
  { title: "Notify Admins", url: "#", icon: BellRing },
  { title: "Download Data", url: "#", icon: Download },
  { title: "Settings", url: "#", icon: Settings },
  { title: "Logs", url: "#", icon: Activity },
  { title: "Backup", url: "#", icon: Download },
  { title: "Audit Trail", url: "#", icon: BarChart2 },
  { title: "Support", url: "#", icon: Mail },
  { title: "Reports", url: "#", icon: BarChart2 },
  { title: "Admin Tools", url: "#", icon: Settings },
]

export function AppSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "16rem",
          "--header-height": "3rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <SidebarTrigger />
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export function AppSidebar() {
  return (
    <Sidebar className="border-none z-40 pt-18" collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <SidebarGroupLabel className="bg-[#2ea0c4] dark:bg-[#05668d] text-white text-xl justify-center py-2 px-2">
          <Link href="/" className="flex items-center gap-2 hover:underline">
            <Home />
            <span>Home</span>
          </Link>
        </SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2 text-xs text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Admin Panel
      </SidebarFooter>
    </Sidebar>
  )
}
