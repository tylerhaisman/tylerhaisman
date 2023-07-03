import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tyler Haisman',
  description: 'Computer Science major at University of Florida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#142134" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
