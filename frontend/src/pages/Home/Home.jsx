import React from 'react'
import Header from "../../components/Header/Header";
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';


function index() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </>
  )
}

export default index;