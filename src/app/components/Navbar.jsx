"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-container')) {
        setDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  return (
    <nav className="top-0 left-0 right-0 z-50 transition-all duration-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent hover:from-gray-600 hover:to-gray-800 transition-all duration-300 hover:scale-105"
            >
              StarPine
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="/" 
              className="relative text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 after:absolute after:w-0 after:h-0.5 after:bg-gray-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="relative text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 after:absolute after:w-0 after:h-0.5 after:bg-gray-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 group"
              >
                Services 
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  <a
                    href="/services/web"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg mx-2 transition-all duration-200 font-medium"
                  >
                    Web Development
                  </a>
                  <a
                    href="/services/mobile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg mx-2 transition-all duration-200 font-medium"
                  >
                    Mobile Apps
                  </a>
                  {/* <a
                    href="/services/seo"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg mx-2 transition-all duration-200 font-medium"
                  >
                    SEO Optimization
                  </a> */}
                  <a
                    href="/services/video"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg mx-2 transition-all duration-200 font-medium"
                  >
                    Video Editing
                  </a>
                </div>
              )}
            </div>

            <a 
              href="/contact" 
              className="relative text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 after:absolute after:w-0 after:h-0.5 after:bg-gray-700 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
            
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-gray-900/50 hover:scale-105 transition-all duration-200 border border-gray-600">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`bg-gray-50 lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden border-t border-gray-200`}>
        <div className="flex flex-col p-4 space-y-4">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg transition-all duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg transition-all duration-200"
          >
            About
          </a>

          {/* Mobile Services Section */}
          <div className="py-2">
            <div className="text-gray-900 font-semibold mb-2 px-2">Services</div>
            <div className="flex flex-col space-y-2 ml-4">
              <a
                href="/services/web"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800 py-2 px-2 rounded-lg transition-all duration-200"
              >
                Web Development
              </a>
              <a
                href="/services/mobile"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800 py-2 px-2 rounded-lg transition-all duration-200"
              >
                Mobile Apps
              </a>
              <a
                href="/services/seo"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800 py-2 px-2 rounded-lg transition-all duration-200"
              >
                SEO Optimization
              </a>
            </div>
          </div>

          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg transition-all duration-200"
          >
            Contact
          </a>
          
          <button 
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 mt-2 border border-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}