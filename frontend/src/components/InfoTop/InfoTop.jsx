import React from "react";
import * as I from "./Styles";
import { Container } from "../../pages/Home/style";
import { CgArrowLongRight } from "react-icons/cg";

function InfoTop() {
  return (
    <>
      <I.InfoTopContainer>
        <Container>
          <I.InfoTopArea>
            <div className="info-area">
              <div className="info-text-left">
                <i>
                  <CgArrowLongRight />
                </i>
                <h2>
                  Por que seu <br></br> negócio precisa de uma <br></br>{" "}
                  <span>Agência Digital?</span>
                </h2>
              </div>
              <div className="info-text-right">
                <p>
                  Uma agência digital de design e desenvolvimento pode ser um
                  investimento valioso para o seu negócio. Aqui estão algumas
                  razões pelas quais você pode se beneficiar ao contratar uma
                  agência digital:
                </p>
                <p>
                  1º Presença online profissional: No mundo digital de hoje, é
                  essencial ter uma presença online profissional para atrair e
                  alcançar os clientes.
                </p>
                <p>
                  2º Presença online profissional: No mundo digital de hoje, é
                  essencial ter uma presença online profissional para atrair e
                  alcançar os clientes.
                </p>
                <p>
                  3º Experiência técnica: Uma agência digital possui uma equipe
                  de profissionais especializados em design e desenvolvimento.
                  Eles têm conhecimento atualizado das melhores práticas,
                  tendências e tecnologias do setor.
                </p>
                <p>
                  4º Foco no seu negócio principal: Ao terceirizar suas
                  necessidades digitais para uma agência especializada, você
                  pode se concentrar no core business do seu negócio. Isso
                  permite que você dedique mais tempo e recursos para o
                  desenvolvimento de produtos, atendimento ao cliente e outras
                  áreas cruciais para o crescimento da sua empresa.
                </p>
                <button>SAIBA MAIS</button>
              </div>
            </div>
          </I.InfoTopArea>
        </Container>
      </I.InfoTopContainer>
    </>
  );
}

export default InfoTop;
