import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar/NavBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Urban',
  description: 'Solucion en tranportes a tu alcance ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavBar/>
      {children}</body>
    </html>
  )
}
