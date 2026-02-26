import Link from 'next/link'
import './globals.css'
import {Footer} from '../components/footer'
import {Header} from '../components/header'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <main>
        <nav className='topnav'>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/">Home</Link>
           <Link href="/signup">Signup</Link>
          <Link href="/login">Login</Link>

          <Link href="/BeClub">Be-Club</Link>
     </nav>
   </main>
   <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}