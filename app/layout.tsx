import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Shreyash Agro Industries - Plant Nutrients & Agricultural Solutions",
  description:
    "Leading manufacturer of plant nutrients, agricultural pesticides, and plant growth promoters. Quality agricultural solutions for better crop yields.",
  generator: "v0.app",
  keywords:
    "plant nutrients, agricultural pesticides, plant growth promoters, fertilizers, crop yield, farming solutions",
  authors: [{ name: "Shreyash Agro Industries" }],
  openGraph: {
    title: "Shreyash Agro Industries - Plant Nutrients & Agricultural Solutions",
    description:
      "Leading manufacturer of plant nutrients, agricultural pesticides, and plant growth promoters. Quality agricultural solutions for better crop yields.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyash Agro Industries - Plant Nutrients & Agricultural Solutions",
    description:
      "Leading manufacturer of plant nutrients, agricultural pesticides, and plant growth promoters. Quality agricultural solutions for better crop yields.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
