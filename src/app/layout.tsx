import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { NextAuthProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Komplex Learning App',
  description: 'Generated by create next app',
  manifest: '/manifest.json',
  icons: { apple: '/icon-192x192.png' },
  themeColor: '#fff'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <div>
          <Navbar />
          {children}
          <p className="text-red-300">Layout teszt</p>
        </div>
      </NextAuthProvider>
    </html>
  )
}
