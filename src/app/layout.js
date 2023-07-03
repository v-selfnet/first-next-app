import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Next Hero',
  description: 'Next Hero Comming Soon',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
export default RootLayout;
