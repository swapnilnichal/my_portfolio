import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css' ;
import BootstrapJs from './components/bootstrapFile'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Swapnil's Portfolio`,
  description: `this is swapnils personal portfolio website where user can see 
                 swapnils information, information about his skills,education, 
                 user can see all the projects built by swapnil in projects section, 
                 user can visit those live projects and also see the code on github,
                 lastly user can see swapnil's experience and the companies where he had worked before.`,
  icons: {
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({ children }) {
    return (
    <html lang="en">
      <BootstrapJs/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
