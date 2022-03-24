import { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Skills } from '../components/skills'
import '../styles/global.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Header />
      <Component {...pageProps} />
      <Skills />
      <Footer />
    </>
    
  )
}

export default MyApp
