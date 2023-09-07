import BtnWpp from "../../components/BtnWpp";
import Hero from "../../components/Hero/Hero";
import ServiceBranding from "../../components/Services/ServiceBranding/ServiceBranding";
import ServiceDev from "../../components/Services/ServiceDev/ServiceDev";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";
import Clients from "../../components/Clients";

export default function Home() {
  return (
    <>
      <BtnWpp />
      <Hero />
      <ServiceBranding />
      <ServiceDev />
      <Portfolio />
      <Clients />
      <Footer />
    </>

  )
}
