import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Addison Litvinchuk — Design Portfolio',
  description:
    'Student Engineer Design Portfolio — ESC102 Engineering Science Praxis II',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8 text-center text-sm mt-24" style={{ borderColor: 'color-mix(in srgb, #E9CE8A 12%, transparent)', color: 'color-mix(in srgb, #ACACC4 50%, transparent)' }}>
          <p>Addison Litvinchuk &mdash; ESC102 Engineering Science Praxis II, 2026</p>
          <p className="mt-1 text-xs opacity-60">
            Design work completed as part of the Engineering Science program at the University of Toronto.
          </p>
        </footer>
      </body>
    </html>
  )
}
