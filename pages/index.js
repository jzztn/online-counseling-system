import Head from 'next/head'
import About from '../components/about/About'
import Hero from '../components/hero/Hero'
import HowItWorks from '../components/how-it-works/HowItWorks'

export default function Home() {
  return (
    <div className='scroll-smooth'>
      <Head>
        <title>CvSU Online Counseling</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Hero />
        <About />
        <HowItWorks />
      </main>
    </div>
  )
}