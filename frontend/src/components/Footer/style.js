import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  -webkit-border-top-left-radius: 50px;
  -webkit-border-top-right-radius: 50px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-topright: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  .copy-area {
    width: 100%;
    margin-bottom: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: var(--primary);
    }
    .social-footer-link {
      color: #fff;
      margin-right: 1rem;
      font-size: 1.4rem;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;

export const FooterArea = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  background-color: #121212;
  margin-bottom: 2rem;
  border-radius: 20px;

  .footer-grid {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
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

        &::before {
          content: "";
          display: block;
          position: relative;
          border-bottom: 3px solid var(--primary);
          width: 100px;
          top: 40px;
        }
      }

      ul {
        margin-top: 2rem;
        li {
          margin-top: 0.8rem;
          a {
            color: #ccc;
            font-size: 1.1rem;

            &:hover {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
`;
