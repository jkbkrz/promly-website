import HomeHeader from '@/components/HomeHeader'
import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Header } from '@/components/Header'
import { AuroraBackground } from '@/components/aurora-bg'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promly',
  description: 'Okazje w jednym miejscu z Promly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <body className={inter.className}>
        {/* <div className='block mb-36' /> */}
        {/* <div className='-z-50 fixed top-0 h-screen w-full bg-gradient-to-br   from-stone-100 via-white to-stone-200 dark:from-stone-800 dark:via-black dark:to-stone-700 left-1/2'
          style={{
            transform: "translate(-50%, 0)", width: "100vw"
          }}
        /> */}
        <ThemeProvider attribute="class"
          // defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          {/* <HomeHeader /> */}
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
