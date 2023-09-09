import styled from "styled-components";

export const ClientsContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  .clients-grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
    .clients-content {
      h1 {
        font-size: 2.8rem;
        color: var(--color-title);
      }
      p {
        margin-top: 1rem;
      }
      @media (max-width: 500px) {
        text-align: center;
      }
    }
    .clients-box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      @media (max-width: 500px) {
        margin-top: 1rem;
      }
      .clients-item {
        width: 200px;
        height: 100px;
        background: #ccc;
        border-radius: 10px;
        @media (max-width: 500px) {
          text-align: center;
          width: 150px;
          height: 100px;
        }
      }
    }
  }
`;

export default function Clients() {
  return (
    <ClientsContainer>
      <div className="container">
        <div className="clients-grid">
          <div className="clients-content">
            <h1>Quem confia em nosso trabalho ❤️</h1>
            <p>
              Were pretty sure everyone wants higher conversion rates and better
              recognition. Dont worry, we got you covered!
            </p>
          </div>
          <div className="clients-box">
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
            <div className="clients-item"></div>
          </div>
        </div>
      </div>
    </ClientsContainer>
  );
}
