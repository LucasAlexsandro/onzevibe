import { HeaderContainer } from "./Styles";
import Icon from "../../assets/ICON.png";
import { useState } from "react";

export default function Header() {

  // Fixa o menu no site quando foi maior que 100
  const [menu, setMenu] = useState(false);

  const fixedMenu = () => {
    const currentScrollPos = window.scrollY
    if(currentScrollPos >= 100) setMenu(true)
    else setMenu(false)
  }
  window.addEventListener("scroll", fixedMenu)



  return (
    <HeaderContainer isTrue={menu}>
      <nav>
        <a href="#">
          <span className="number-link">01</span>
          <span>Home</span>
        </a>
        <a href="#">
          <span className="number-link">02</span>
          <span>BioLink</span>
        </a>
        <a href="#">
          <span className="number-link">03</span>
          <span>Sobre</span>
        </a>
        <img src={Icon} />
        <a href="#">
          <span className="number-link">04</span>
          <span>Serviços</span>
        </a>
        <a href="#">
          <span className="number-link">05</span>
          <span>Portfólio</span>
        </a>
        <a href="#">
          <span className="number-link">06</span>
          <span>Contato</span>
        </a>
      </nav>
    </HeaderContainer>
  );
}
