import React from 'react'
import Header from "../../components/Header/Header";
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';
import InfoTop from '../../components/InfoTop/InfoTop';
import Contact from '../../components/Contact/Contact';
import Steps from '../../components/Steps/Steps';


function index() {
  return (
    <>
      <Header />
      <Hero />
      <InfoTop />
      <Services />
      {/* <Steps /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default index;