import Link from 'next/link'
import './globals.css'
import {Footer} from '../components/footer'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav className='topnav'>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/">Home</Link>
           <Link href="/signup">Signup</Link>
          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
     </nav>
   
        {children}
        <Footer/>
      </body>
    </html>
  )
}