
import Footer from '@/components/footer'
import Header from '@/components/header'
import HomePage from '@/components/home'
import Script from 'next/script'
import React, { useEffect } from 'react'
import HeadTag from '../headTag'
import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter();
    console.log(router,"router101")
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
       <HomePage />
    <Footer />
    
    </>
  )
}

export default Home

 // useEffect(()=>{
    //     handlscript
    // },[router.pathname])

    {/* <Script src="js/main.js"  ></Script> */}
    {/* {handlscript()} */}

     // const handlscript = ()=>{
    //     if (typeof window !== 'undefined') {
    //         return(
    //             <Script src="js/main.js"  ></Script>
    //         )
    //     }
       
    // }