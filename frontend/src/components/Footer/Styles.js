import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  margin: 2rem 0;

  .grid-footer {
    border-top: 2px solid #dcdcdc;
    border-bottom: 2px solid #dcdcdc;
    padding: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    .form-footer {
      border-right: 2px solid #dcdcdc;

      @media (max-width: 480px) {
        border: none;
      }

      h2 {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--color-title);
      }
      p {
        margin: 1rem 0;
        color: var(--color-subtitle);
      }
      form {
        padding-right: 2rem;
        width: 100%;
        input {
          margin-top: 1rem;
          padding: 1rem;
          width: 100%;
          border: 1px solid #dfdfdf;
          border-radius: 2px;
          font-size: 1rem;
          cursor: pointer;
        }
        input[type="submit"] {
          background: var(--color-primary);
          border: none;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }

    .links-footer {
      width: 100%;
      display: flex;
      margin-left: 2rem;

      @media (max-width: 480px) {
        margin-left: 0;
        margin-top: 2rem;
      }

      nav {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        ul {
          h3 {
            font-size: 1.4rem;
            color: var(--color-title);
            font-weight: 600;
            margin-bottom: 1rem;
          }
          li {
            margin-top: 0.5rem;
            a {
              color: var(--color-subtitle);
              font-weight: 500;
              &:hover {
                color: var(--color-primary);
              }
            }
          }
        }
      }
    }
  }

  .footer-end {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      max-width: 50px;
    }
  }
`;
