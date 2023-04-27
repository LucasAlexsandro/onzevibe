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
  justify-content: center;
  flex-direction: column;
  .services-grid {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 3rem;

    @media (max-width: 840px) {
      justify-content: center;
    }

    .services-box {
      max-width: 380px;
      width: 100%;

      h4 {
        font-size: 1.5rem;
        display: inline-block;
        -webkit-background-clip: text;
        background-clip: text;
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
