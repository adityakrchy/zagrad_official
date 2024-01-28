import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/provider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Created By Zagrad Teams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className='lg:px-20 w-full min-h-screen'>
            <Navbar />
            <div className="flex-grow flex-1">
              {children}
            </div>
            <Footer />
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
