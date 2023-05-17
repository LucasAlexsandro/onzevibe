import styled from "styled-components";

export const HeaderContainer = styled.div`
  position:  fixed;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171717;
  z-index: 999999;
`;

export const HeaderNav = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-logo {
    max-width: 200px;
    img {
      max-width: 100%;
    }
  }

  .header-items {
    .header-btn {
      width: 60px;
      height: 60px;
      background: var(--gray);
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: var(--primary);
      cursor: pointer;
      border: none;
    }
  }
`;


export const MenuFull = styled.div`
  display: ${props => props.active ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-black);
  overflow: hidden;

  button {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 3rem;
    margin-right: 3rem;
    border: none;
    background-color: var(--gray);
    font-size: 2rem;
    border-radius: 100%;  
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    cursor: pointer;
  }

  ul {
    li {
      margin: 3rem 0;
      a {
        font-size: 4rem;
        font-weight: 700;
        color: #fff;
        &:hover {
          border-bottom: 3px solid var(--primary);
        }
      }
    }
  }

  span {
    color: var(--primary);
    font-size: 0.6em;
    position: relative;
    top: -2rem;
    margin-right: 0.5rem;
  }
`;