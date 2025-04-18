import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const mono = Roboto_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Welcome IQ',
  description: 'Smart contractor onboarding system',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-180x180.png', sizes: '180x180' },
      { url: '/icon-120x120.png', sizes: '120x120' },
      { url: '/icon-152x152.png', sizes: '152x152' },
      { url: '/icon-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  )
}
