import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aaron Cheung\'s Portfolio',
  description: 'Portfolio showcasing achievements and personal projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
            {/* this is where all components that are rendered once needs to be */}
            <div className='bg'>
              <Navbar />
              {children}
            </div>
            <Footer />
          </body>
      </html>
    </>
  )
}
