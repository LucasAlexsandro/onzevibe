import Header from "../Header/Header";
import { HeroContainer } from "./Styles";
import { BsArrowDown } from "react-icons/bs"
import Logo1 from "../../assets/ICON3.png";
import Mar from "../../assets/mar.png";


export default function Hero() {
  return (
    <HeroContainer>
      <Header />
      <div className="hero-grid">
        <h1>Desperte seu negócio pro <br/> <span>digital</span></h1>
      </div>
      <a href="#service-branding">
        <BsArrowDown/>
      </a>
    </HeroContainer>
  );
}
