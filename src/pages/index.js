import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomePage from "@/components/home";
import AboutPage from "@/components/about";
import ContactPage from "@/components/contact";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import dynamic from "next/dynamic";
// lib/owlcarousel/owl.carousel.min.js
// const OwlCarousel = dynamic(() => import("../../public/lib/owlcarousel/owl.carousel.min.js"), {
//   ssr: false,
// });


export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    handleInitRout()
  },[])

  const handleInitRout = () =>{
    router.push("/home");
  }



  return (
    <>
      
      {/* <Header/> */}
      {/* <HomePage/> */}
      {/* <AboutPage/> */}
      {/* <ContactPage/> */}
      {/* <Footer/> */}
      {/* {handleInitRout()} */}
      
    </>
  );
}



   

    {/* <!-- Customized Bootstrap Stylesheet --> */}
    {/* <link href="css/bootstrap.min.css" rel="stylesheet"/> */}

    {/* <!-- Template Stylesheet --> */}
    {/* <link href="css/style.css" rel="stylesheet"></link> */}

    {/* <!-- JavaScript Libraries --> */}
    {/* <script defer src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script defer src="lib/wow/wow.min.js"></script>
    <script defer src="lib/easing/easing.min.js"></script>
    <script defer src="lib/waypoints/waypoints.min.js"></script>
    <script defer src="lib/owlcarousel/owl.carousel.min.js"></script> */}

    {/* <!-- Template Javascript --> */}
    {/* <script src="js/main.js"></script> */}


     {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" defer></script>
    <script src="lib/wow/wow.min.js" defer></script>
    <script src="lib/easing/easing.min.js" defer></script>
    <script src="lib/waypoints/waypoints.min.js" defer></script>
    <script src="js/main.js"></script> */}

    {/* <Script defer src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
    <Script defer src="../../public/lib/owlcarousel/owl.carousel.min.js"></Script> */}

    {/* <script  src="lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive"></script>  */}

      {/* <Script defer src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
      <Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
      <Script defer src="lib/wow/wow.min.js"></Script>
      <Script defer src="lib/easing/easing.min.js"></Script>
      <Script defer src="lib/waypoints/waypoints.min.js"></Script>
      <Script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script> */}

      {/* <script  src="lib/owlcarousel/owl.carousel.min.js"></script> */}