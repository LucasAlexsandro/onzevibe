import styled from "styled-components";
import Banner from "../../assets/ICON3.png";

export const HeroContainer = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #171717;

  .hero-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${Banner});
    background-position: center; 
    background-repeat: no-repeat; 
    animation: move_wave;

    @keyframes move_wave {
      0% {
        transform: translateX(0) translateZ(0) scaleY(1);
      }
      50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55);
      }
      100% {
        transform: translateX(-50%) translateZ(0) scaleY(1);
      }
    }

    h1 {
      color: var(--gray);
      font-size: 4rem;
      text-align: center;

      @media (max-width: 1100px){
        font-size: 3rem;
      }
      @media (max-width: 1100px){
        font-size: 2rem;
      }
    }
  }

  .hero-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--gray);
    img {
      max-width: 90px;
    }
  }
`;
