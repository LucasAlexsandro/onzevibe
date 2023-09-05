import { useState, useEffect } from "react";
import { HeaderContainer } from "./Styles";
import Icon from "../../assets/ICON.png";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  // Fixa o menu no site quando foi maior que 100
  const [menu, setMenu] = useState(false);

  const fixedMenu = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos >= 100) setMenu(true);
    else setMenu(false);
  };
  window.addEventListener("scroll", fixedMenu);

  // Muda para o menu mobile
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    // Função para verificar a largura da janela e decidir se o componente deve ser exibido
    const handleResize = () => {
      if (window.innerWidth >= 790) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };

    // Adiciona um ouvinte de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Verifica o tamanho da janela quando o componente é montado
    handleResize();

    // Remove o ouvinte de redimensionamento da janela quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {mobile ? (
        <HeaderMobile />
      ) : (
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
      )}
    </>
  );
}
