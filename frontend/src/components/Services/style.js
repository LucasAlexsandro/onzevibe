import styled from "styled-components";

export const ServiceContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #f7f8fd;
  display: flex;
  align-items: center;
  justify-content: center;

  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .services-box {
      padding: 2rem;
      border-radius: 20px;
      background-color: #ffffff;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text);


      img {
        max-width: 150px;
      }

      h3 {
        font-size: 2rem;
        font-weight: bold;
      }

      p {
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;
        text-align: justify;
      }
    }

    .s1 {
      background-color: transparent;
    }

    .s-f {
      gap: 3rem;
      display: flex;
    }
  }
`;

export const Title = styled.h1`
  color: #191825;
  font-family: "Be Vietnam Pro", Sans-serif;
  font-size: 4rem;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 1.335em;

  span {
    position: relative;
    display: inline-block;
    z-index: 1;

    &:before {
      z-index: -1;
      content: "";
      position: absolute;
      left: 1px;
      bottom: 13px;
      background: var(--primary);
      width: 100%;
      height: 15px;
      border-radius: 2px;
    }
  }
`;
