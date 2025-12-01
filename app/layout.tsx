import type React from "react"
import type { Metadata } from "next"
import { Yaldevi as Yaldevi_Colombo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _yaldeviColombo = Yaldevi_Colombo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Graminee - Flower Shop",
  description:
    "Discover beautiful flower arrangements and botanical designs at Graminee. Fresh flowers and dried flowers for every occasion.",
  generator: "tarendra-mallick.vercel.app",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🌸</text></svg>",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
