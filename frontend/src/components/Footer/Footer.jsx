import React from "react";
import * as F from "./style";
import { Container } from "../../pages/Home/style";

export default function Footer() {
  return (
    <>
      <F.FooterContainer>
        <Container>
          <F.FooterArea>
            <div className="footer-content">
              <h2>Vamos Criar Algo Incrivel Juntos</h2>
              <p>
                At G.Xber we specialize in designing, building, shipping and
                scaling beautiful, usable products with blazing-fast efficiency
              </p>
              <button>Vamos falar</button>
            </div>
            <div className="footer-bottom">teste</div>
          </F.FooterArea>
        </Container>
      </F.FooterContainer>
    </>
  );
}
