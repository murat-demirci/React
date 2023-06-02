import { Inter } from 'next/font/google'
import '@/styles/reset.css'
import '@/styles/global.css'//json.config
import Header from '@/components/header'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NetFilm',
  description: 'Izlemek istedigin hersey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
