import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  -webkit-border-top-left-radius: 50px;
  -webkit-border-top-right-radius: 50px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-topright: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const FooterArea = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  border-top: 1px solid #ccc;

  .footer-grid {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .footer-card {
      height: 300px;
      width: 300px;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        max-width: 250px;
      }

      h3 {
        text-align: left;
        font-size: 1.5rem;
        color: #ccc;
        margin-bottom: 1rem;
      }

      ul {
        li {
          margin-top: 0.5rem;
          a {
            color: #ccc;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;
