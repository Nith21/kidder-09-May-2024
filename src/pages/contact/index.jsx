import React, { useEffect } from 'react'
import HeadTag from '../headTag'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactPage from '@/components/contact'
import { useRouter } from 'next/router'

function Contact() {
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
     <ContactPage />
    <Footer />
    </>
  )
}

export default Contact