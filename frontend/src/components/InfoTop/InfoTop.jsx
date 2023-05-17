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
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
