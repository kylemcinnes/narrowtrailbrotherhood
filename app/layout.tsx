import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Narrow Trail Brotherhood - Men. Outdoors. Brotherhood.',
  description: 'A Christian men\'s fellowship and discipleship community based near Mississauga. We gather men around the outdoors and open the Scriptures together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

