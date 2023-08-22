import { ClientsContainer } from "./styles";
import { Container } from "../../pages/Home/style";
import config from "./clients.data";
import { Title } from "../Services/style";

export default function Clients() {
  return (
    <ClientsContainer>
      <Title>
        Quem confia em nosso <span>trabalho</span>
      </Title>
      <Container>
        <div className="clients-grid">
          {config.map((item, index) => (
            <div className="clients-card" key={index}>
              <img src={item.img} />
            </div>
          ))}
        </div>
      </Container>
    </ClientsContainer>
  );
}
