import styled from "styled-components";

export const ClientsContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .clients-grid {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 2rem;

    .clients-card {
      width: 200px;
      padding: 1rem;
      

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        max-width: 150px;
      }
    }
  }
`;
