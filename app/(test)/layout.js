import '../globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Promly',
    description: 'Okazje w jednym miejscu z Promly',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(inter.className, 'bg-black')}>
                {children}
            </body>
        </html>
    )
}
