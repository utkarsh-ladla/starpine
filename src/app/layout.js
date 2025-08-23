// src/app/layout.js
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Company Landing Page</title>
        <meta name="description" content="Official company website" />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
