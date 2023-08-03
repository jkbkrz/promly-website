import HomeHeader from '@/components/HomeHeader'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promly',
  description: 'Okazje w jednym miejscu z Promly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeHeader />
        <div className='block mb-32 sm:mb-36' />
        {children}</body>
    </html>
  )
}
