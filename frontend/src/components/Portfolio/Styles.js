import styled from "styled-components";

export const PortfolioContainer = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .portfolio-area {
    margin-top: 3rem;
    margin-bottom: 2rem;
    max-width: 100%;
    width: 100%;
    align-items: center;
    position: relative;

    .carousel {
      cursor: grab;
      overflow: hidden;

      .inner {
        display: flex;
        gap: 2rem;

        .carousel-item {
          max-height: 800px;
          min-width: 85%;

          @media (max-width: 400px) {
            max-height: 300px;
            width: 100%;
          }

          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            pointer-events: none;
            object-fit: cover;
          }

          span {
            width: 100%;
            background-color: var(--primary);
            padding: 1rem;
          }
        }
      }
    }
  }
`;
