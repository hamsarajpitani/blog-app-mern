import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from 'next-auth/client'
import Header from '../components/Header'
import Footer from '../components/Footer'
// add bootstrap css 
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>
         
         <main>
         <Header />
         <Component {...pageProps} />
         <Footer />
         </main>
      </>
   )

}

export default MyApp
