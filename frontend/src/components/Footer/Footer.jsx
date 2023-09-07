import { FooterContainer } from "./Styles";
import { useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import Axios from "axios";

// Icons
import Icon from "../../assets/ICON.png";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Previne a recargaa da página padrão do formulário
    // console.log("Email enviado:", emailInput); // Debug

    if (emailInput === "") {
      alert("Nenhum dado inserido! ");
    } else {
      Axios.post(
        "http://localhost:3000/api/news",
        {
          email: emailInput,
        },
        {
          headers: {
            Authorization: "teste1",
          },
        }
      );
    }
  };

  return (
    <FooterContainer>
      <div className="container">
        <div className="grid-footer">
          <div className="form-footer">
            <h2>Newsletter</h2>
            <p>
              Were pretty sure everyone wants higher conversion rates and better
              recognition. Dont worry, we got you covered!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Digite seu e-mail"
                name="email"
                value={emailInput}
                onChange={handleEmailChange}
              />
              <input type="submit" />
            </form>
          </div>
          <div className="links-footer">
            <nav>
              <ul>
                <h3>Suporte</h3>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Serviços</a>
                </li>
                <li>
                  <a href="#">Faq</a>
                </li>
              </ul>
              <ul>
                <h3>Sociais</h3>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
              <ul>
                <h3>Politicas</h3>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Termos de uso</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-end">
          <div className="footer-arrow-top">
            <a href="#">
              <i>
                <BsArrowUpShort />
              </i>
              Voltar para o topo
            </a>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
