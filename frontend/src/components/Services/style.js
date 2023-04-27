import styled from "styled-components";

export const ServiceContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .services-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .services-box {
      margin-top: 3rem;
      width: 400px;
      height: 400px;
      padding: 2rem;
      border-radius: 20px;
      border: 1px solid #1f2021;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--text);

      img {
        max-width: 100px;
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
  color: #fff;
  font-family: "Be Vietnam Pro", Sans-serif;
  font-size: 4rem;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 1.335em;
  margin: 3rem 0;

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
