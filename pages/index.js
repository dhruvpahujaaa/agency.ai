import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Services from '../components/Services'
import OurWork from '../components/OurWork'
import Teams from '../components/Teams'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function Home({ theme, setTheme }) {
  return (
    <>
      <Head>
        <title>agency.ai</title>
        <meta name="description" content="Turning imagination into digital impact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5044E5" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </>
  )
}
