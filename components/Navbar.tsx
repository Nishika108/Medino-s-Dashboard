"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo1 from '@/Assets/Logo1.png'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Sun, Moon, Mail, Search } from "lucide-react"
import { useTheme } from "next-themes"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="dark:bg-[#05668d] bg-[#2ea0c4] text-white sticky top-0 z-50 w-full">
      <div className="flex flex-wrap justify-between items-center px-4 py-3 md:px-6 md:py-4 gap-4">

        {/* Logo */}
        <Link href='/' className="flex items-center space-x-2">
          <Image
            src={logo1}
            alt="Logo"
            height={50}
            width={150}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 w-full max-w-md md:mx-6 order-3 md:order-none">
          <div className="relative pl-20">
            <div className="absolute inset-y-0 left-0 flex items-center pl-23">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 text-gray-600 dark:text-white bg-white dark:bg-gray-800 rounded-2xl border-none shadow-none focus:ring-0"
            />
          </div>
        </div>

        {/* Icons & Help */}
        <div className="flex items-center gap-4 order-2 md:order-last ml-auto">
          {/* Notification Icon */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="text-white" />
          </Button>

          {/* Mail Icon */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Mail className="text-white" />
          </Button>

          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "dark" ? (
                <Moon className="text-white transition-all" />
              ) : (
                <Sun className="rotate-180 transition-all text-yellow-400" />
              )}
            </Button>
          )}

          {/* Help Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white font-semibold">Help</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-gray-900 dark:text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Change Password</DropdownMenuItem>
              <DropdownMenuItem>FAQ</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sign">Sign out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
