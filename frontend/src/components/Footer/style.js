import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  -webkit-border-top-left-radius: 50px;
  -webkit-border-top-right-radius: 50px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-topright: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #f7f8fd;
`;

export const FooterArea = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: 3rem;
      color: #fff;
    }

    p {
      max-width: 600px;
      width: 100%;
      margin-bottom: 3rem;
    }
  }

  .footer-bottom {
    width: 100%;
    border-top: 1px solid #ccc;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
