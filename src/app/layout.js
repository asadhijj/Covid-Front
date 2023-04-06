import './globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

export const metadata = {
  title: 'COVID-19',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Header></Header>
        </header>
        <main>{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
