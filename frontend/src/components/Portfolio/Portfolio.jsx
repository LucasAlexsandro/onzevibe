import { ServiceTitle } from "../Services/ServiceDev/Styles";
import { PortfolioContainer } from "./Styles";

const images = [
  "https://onovo.bslthemes.com/wp-content/uploads/2023/01/project-3-1080x800.jpg",
  "https://onovo.bslthemes.com/wp-content/uploads/2023/01/project-4-1080x800.jpg",
  "https://onovo.bslthemes.com/wp-content/uploads/2023/01/project-1-1080x800.jpg",
  "https://onovo.bslthemes.com/wp-content/uploads/2023/02/project-5-1080x800.jpg",
  "https://onovo.bslthemes.com/wp-content/uploads/2023/01/project-8-1080x800.jpg",
  "https://onovo.bslthemes.com/wp-content/uploads/2023/01/project-3-1080x800.jpg",
];

export default function Portfolio() {
  return (
    <PortfolioContainer id="portfolio">
      <ServiceTitle>
        <h1>Portfólio</h1>
        <p>
          Were pretty sure everyone wants higher conversion rates and better
          recognition. Dont worry, we got you covered!{" "}
        </p>
      </ServiceTitle>
      <div className="portfolio-grid">
        {images.map((item, index) => (
          <div className="grid-item" key={index}>
            <img src={item} alt={`Imagem ${index}`} />
          </div>
        ))}
      </div>
    </PortfolioContainer>
  );
}
