import styled from "styled-components";

export const ServiceContainer = styled.section`
  width: 100%;
  min-height: 100vh;
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
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

    .services-box {
      width: 400px;

      h4 {
        font-size: 1.5rem;
        /* Definir o plano de fundo do texto */
        background: linear-gradient(to right, #884a4a 15%, #ff6000 20%);
        display: inline-block;
        /*Recorte o fundo até o texto*/
        -webkit-background-clip: text;
        background-clip: text;

        /*Defina a cor do texto para transparente*/
        color: transparent;
        background-image: linear-gradient(
          45deg,
          #1471e2 0%,
          #29b7bc 27%,
          #11b647 48%,
          #ffa500 69%,
          #ec0043 100%
        );
      }

      hr {
        margin: 1rem 0;
        border: 1px solid #252525;
      }

      ul {
        li {
          margin-top: 1rem;
          a {
            font-size: 1.4rem;
            color: #fff;

            :hover {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-family: "Be Vietnam Pro", Sans-serif;
  font-size: 3rem;
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
