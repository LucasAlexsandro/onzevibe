import React from "react";
import { BioContainer } from "./Styles";
import Logo from "../../assets/ICONonzevibe.png";
import Wpp from "../../assets/whatsapp.png";
import Rede from "../../assets/site.png";
import Insta from "../../assets/instagram.png";
import Email from "../../assets/email.png";
import Face from "../../assets/facebook.png";
import { CgWebsite } from "react-icons/cg";

export default function Bio() {
  return (
    <BioContainer>
      <div className="logo-bio">
        <img src={Logo} />
      </div>
      <div className="wrapper-bio">
        <a href="/" className="item-bio">
          <img src={Rede} />
          <span>Website</span>
        </a>
        <a href="http://www.whatsapp.com" className="item-bio">
        <img src={Wpp} />
          <span>Whatsapp</span>
        </a>
        <a href="https://www.instagram.com/onzevibe/" className="item-bio">
        <img src={Insta} />
          <span>Instagram</span>
        </a>
        <a href="https://www.instagram.com/onzevibe/" className="item-bio">
        <img src={Face} />
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/onzevibe/" className="item-bio">
        <img src={Email} />
          <span>Email</span>
        </a>
      </div>
    </BioContainer>
  );
}
