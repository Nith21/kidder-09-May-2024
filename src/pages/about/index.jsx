
import AboutPage from '@/components/about'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useEffect } from 'react'
import HeadTag from '../headTag'
import Script from 'next/script'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'js/main.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}, [router])

  return (
    <>
     <HeadTag/>
    <Header />
      <AboutPage />
      <Footer />
      
    </>
  )
}

export default About

{/* <Script src="js/main.js"  ></Script> */}