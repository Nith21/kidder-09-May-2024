import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";
import Script from "next/script";

// const  handleScript = ()=>{
//   if(typeof window !== 'undefined'){
//     console.log(window,"window101000")
//     return (
//       <>
//     <Script defer src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive"></Script>
//       <Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
//       <Script defer src="lib/wow/wow.min.js" strategy="beforeInteractive"></Script>
//       <Script defer src="lib/easing/easing.min.js" strategy="beforeInteractive"></Script>
//       <Script defer src="lib/waypoints/waypoints.min.js" strategy="beforeInteractive" ></Script>
//       <Script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive"></Script>
//       <Script src="js/main.js" strategy="beforeInteractive"></Script>
//       </>
//     )
//   }
  
// }
export default function App({ Component, pageProps }) {
  return  <>
  <div class="container-xxl bg-white p-0"><Component {...pageProps} /></div>
  {/* {handleScript()} */}
  
      {/* <Script defer src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
      <Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
      <Script defer src="lib/wow/wow.min.js"></Script>
      <Script defer src="lib/easing/easing.min.js"></Script>
      <Script defer src="lib/waypoints/waypoints.min.js"></Script>
      <Script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script>
      <Script src="js/main.js"></Script> */}
      <Script defer src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive"></Script>
      <Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
      <Script defer src="lib/wow/wow.min.js" strategy="beforeInteractive"></Script>
      <Script defer src="lib/easing/easing.min.js" strategy="beforeInteractive"></Script>
      <Script defer src="lib/waypoints/waypoints.min.js" strategy="beforeInteractive" ></Script>
      <Script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive"></Script>
      {/* <Script src="js/main.js"  ></Script> */}
  </>
}

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//         import  ('../../public/lib/owlcarousel/owl.carousel.min.js').then(() => {
//             // Code that depends on the imported module
//         })
//       }
// }, [])

// import { useEffect } from "react";
// import "../../public/lib/animate/animate.min.css"
// import "../../public/lib/owlcarousel/assets/owl.carousel.min.css"
// import Head from "next/head";
// import '../../public/lib/owlcarousel/owl.carousel.min.js';

// <Head>
//   {/* <Script
//           src="../../public/lib/owlcarousel/owl.carousel.min.js"
//           // strategy="beforeInteractive"
//           // strategy="afterInteractive"
//         ></Script> */}
//         {/* <Script defer src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
//       <Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
//       <Script defer src="lib/wow/wow.min.js"></Script>
//       <Script defer src="lib/easing/easing.min.js"></Script>
//       <Script defer src="lib/waypoints/waypoints.min.js"></Script>
//       <Script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script> */}
//   </Head>

//     useEffect(() => {
//     if (typeof window !== 'undefined') {
//         import  ('../../public/lib/owlcarousel/owl.carousel.min.js').then(() => {
//             // Code that depends on the imported module
//         })
//       }
// }, [])

// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     console.log(typeof window,"window101")
//       // Dynamically load the script here
//       const script = document.createElement('script');
//       script.src = '../../public/lib/owlcarousel/owl.carousel.min.js';
//       // script.async = true;
//       document.body.appendChild(script);
//   }
// }, []);

//  {/* <Script
//           src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
//           // strategy="beforeInteractive"
//           // strategy="afterInteractive"
//         ></Script> */}