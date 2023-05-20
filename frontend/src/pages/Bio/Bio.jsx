import React from "react";
import { BioContainer } from "./Styles";
import Logo from "../../assets/ICON2.png";
import Wpp from "../../assets/whatsapp.png";
import Rede from "../../assets/site.png";
import Insta from "../../assets/instagram.png";
import { CgWebsite } from "react-icons/cg";

export default function Bio() {
  return (
    <BioContainer>
      <div className="logo-bio">
        <img src={Logo} />
      </div>
      <div className="wrapper-bio">
        <a href="http://" className="item-bio">
          <img src={Rede} />
          <span>Website</span>
        </a>
        <a href="http://" className="item-bio">
        <img src={Wpp} />
          <span>Whatsapp</span>
        </a>
        <a href="http://" className="item-bio">
        <img src={Insta} />
          <span>Instagram</span>
        </a>
      </div>
    </BioContainer>
  );
}
