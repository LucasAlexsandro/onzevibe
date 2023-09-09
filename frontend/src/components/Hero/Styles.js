import styled from "styled-components";
import bg from "../../assets/dfdfdf.png";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${bg});
  background-position: center;
  background-attachment: fixed;
  background-size: 60%;

  @media (max-width: 500px) {
    background-size: 100%;
  }

  .hero-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    h1 {
      color: #fff;
      font-size: 64px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
      text-transform: uppercase;
      span {
        background: var(--color-primary);
        padding: 0 2rem;
        border-radius: 10px;
      }
    }
  }

  .hero-link-animated {
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    animation: arrow 2s infinite;
    @keyframes arrow {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  }
`;
