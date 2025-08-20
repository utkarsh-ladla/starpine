// src/app/layout.js
import Navbar from "./components/Navbar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Company Landing Page</title>
        <meta name="description" content="Official company website" />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
  