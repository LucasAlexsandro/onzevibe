import styled from "styled-components";

export const InfoTopContainer = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoTopArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .info-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    place-items: center;

    .info-text-left {
      i {
        font-size: 2rem;
        color: #fff;
      }
      h2 {
        font-size: 2rem;
        color: #fff;

        span {
          color: var(--primary);
        }
      }
    }

    .info-text-right {
      width: 100%;
      border: 2px solid #ccc;
      min-height: 400px;
      border-radius: 20px;
      padding: 3rem;
      max-width: 500px;

      p {
        color: #fff;
        text-align: justify
      }

      button {
        cursor: pointer;
        margin-top: 1.5rem;
        margin-bottom: 0.6rem;
        width: 100%;
        border: none;
        color: #fff;
        background-color: var(--primary);
        padding: 0.7rem;
        font-size: 1rem;
      }
    }
  }
`;