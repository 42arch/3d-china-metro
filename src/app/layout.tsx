import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '3D China Metro',
  description: '中国城市地铁3D图',
  keywords: [
    '中国地铁',
    '3d图',
    '中国轨道交通',
    '中国城市地铁路线图',
    '3d metro '
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'h-[100vh] w-[100vw]')}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
