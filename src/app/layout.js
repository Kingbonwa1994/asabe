import Footer from '@/components/Footer'
import './globals.css'


export const metadata = {
  title: '1cliQ',
  description: 'Get help with a single click',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
    <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     <main>{children}</main>
      <Footer style={{ marginTop: 'auto' }} />
    </body>
  </html>
  )
}
