// app/layout.js
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Ibadur Rahman Academy - Excellence in Education',
  description: 'Welcome to Ibadur Rahman Academy, Ghana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}