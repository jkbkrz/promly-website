import HomeHeader from '@/components/HomeHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promly',
  description: 'Okazje w jednym miejscu z Promly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className='block mb-32 sm:mb-36' />
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <HomeHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
