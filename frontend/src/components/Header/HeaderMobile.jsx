import styled from "styled-components";
import Icon from "../../assets/ICON.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const MobileContainer = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  img {
    max-height: 70%;
  }

  .btn-menu-grid {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--color-primary);
  }
`;

export const MenuMobileOpen = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: #333;
  transition: left 0.3s ease-in-out;

  button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    font-size: 3rem;
    background: none;
    border: none;
    color: white;
  }

  .menu-options {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    nav {
      a {
        margin-top: 1rem;
        color: #fff;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .number-link {
          font-size: 1rem;
        }
        &:hover {
          color: var(--color-primary);
        }
      }
    }
  }
`;

export default function HeaderMobile() {
  const [menuMobile, setMenuMobile] = useState(false);

  const openMenu = () => setMenuMobile(true);

  const closeMenu = () => setMenuMobile(false);

  return (
    <>
      <MobileContainer>
        <img src={Icon} />
        <button className="btn-menu-grid" onClick={openMenu}>
          <AiOutlineMenu />
        </button>
      </MobileContainer>
      <MenuMobileOpen isOpen={menuMobile}>
        <button onClick={closeMenu}>
          <AiOutlineClose />
        </button>
        <div className="menu-options">
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
        </div>
      </MenuMobileOpen>
    </>
  );
}
