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
        <div className="menu-options"></div>
      </MenuMobileOpen>
    </>
  );
}
