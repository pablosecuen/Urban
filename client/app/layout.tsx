import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"

const links = [{
  label: "home",
  route: "/",
},{
  label: "perfil",
  route: "/perfil",
},{
  label: "ayuda",
  route: "/ayuda",
}]


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
        <header>
        <nav> 
          <ul>  
            {links.map(({label, route}) =>(
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
      
        </nav>
        </header>
        {children}</body>
    </html>
  )
}
