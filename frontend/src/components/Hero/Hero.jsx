import Header from "../Header/Header";
import { HeroContainer } from "./Styles";
import Logo1 from "../../assets/ICON3.png"
import Mar from "../../assets/mar.png"
import HeaderMobile from "../Header/HeaderMobile";

export default function Hero() {
  return (
    <HeroContainer>
      <Header />
      {/* <div className="hero-grid">
        <h2>AGENCIA</h2>
        <img src={Logo1} />
        <h2>DIGITAL</h2>
      </div>
      <div className="hero-footer">
        <h3>vibre na mesma frequência do seu cliente</h3>
        <img src={Mar} />
      </div> */}
    </HeroContainer>
  )
}
