// components/ui/navbar.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/buttons"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-600">
              StarPine
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>

            {/* Dropdown for Services */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/services/web">Web Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/mobile">Mobile Apps</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/seo">SEO Optimization</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Button className="bg-gray-600">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-gray-900"
            >
              About
            </Link>

            {/* Services Dropdown (simplified for mobile) */}
            <div className="flex flex-col space-y-1">
              <span className="text-gray-700 font-medium">Services</span>
              <Link
                href="/services/web"
                onClick={() => setIsOpen(false)}
                className="ml-4 text-gray-600 hover:text-gray-900"
              >
                Web Development
              </Link>
              <Link
                href="/services/mobile"
                onClick={() => setIsOpen(false)}
                className="ml-4 text-gray-600 hover:text-gray-900"
              >
                Mobile Apps
              </Link>
              <Link
                href="/services/seo"
                onClick={() => setIsOpen(false)}
                className="ml-4 text-gray-600 hover:text-gray-900"
              >
                SEO Optimization
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
