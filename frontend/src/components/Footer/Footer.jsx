import { FooterContainer } from "./Styles";

export default function Footer() {
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
            <form>
              <input type="email" placeholder="digite seu email" name="email" />
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
        <div className="footer-end"></div>
      </div>
    </FooterContainer>
  );
}
