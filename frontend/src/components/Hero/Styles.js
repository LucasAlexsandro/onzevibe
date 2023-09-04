import styled from "styled-components";
import bg from "../../assets/dfdfdf.png"

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(${bg});
  background-position: center;
  background-attachment: fixed;
  background-size: 50%;

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;

    h2 {
      color: #fff;
      font-size: 64px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  .hero-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    img {
      width: 66px;
      height: 66px;
      flex-shrink: 0;
    }
  }
`;
