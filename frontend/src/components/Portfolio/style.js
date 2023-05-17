import styled from "styled-components";

export const PortfolioContainer = styled.section`
  width: 100%;
  min-height: 100vh;
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
          min-height: 600px;
          min-width: 900px;

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
