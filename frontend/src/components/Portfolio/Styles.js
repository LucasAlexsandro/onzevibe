import styled from 'styled-components';

export const PortfolioContainer = styled.section`
  margin-top: 2rem;
  min-height: 100vh;
  width: 100%;

  .portfolio-grid {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    gap: 0.2rem;
    grid-template-columns: 1fr 1fr 1fr;
    .grid-item {
      background-color: #ccc;
      height: 500px;
      img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
      }
    }
  }
`;
