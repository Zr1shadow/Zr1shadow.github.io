import Head from 'next/head'
import Script from "next/script"
import Layout from '../components/Layout'
import Sections from '../components/Sections'
import About from '../components/About'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import HeroImage from '../public/hero.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Raul</title>
      </Head>
      <Nav />
      
      <Sections test={<Hero/>} img={HeroImage}/>
      {/* <About /> */}

      
      
      
    </>
  )
}
