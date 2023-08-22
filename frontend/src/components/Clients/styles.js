import styled from 'styled-components';

export const ClientsContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .clients-grid {
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    .clients-card {
      width: 250px;
      height: 250px;
      padding: 1rem;
      border: 1px solid var(--gray);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        max-width: 70%;
      }
    }
  }
`;
