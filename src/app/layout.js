import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '1cliQ',
  description: 'Get help with a single click',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
    <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {children}
      <Footer style={{ marginTop: 'auto' }} />
    </body>
  </html>
  )
}
