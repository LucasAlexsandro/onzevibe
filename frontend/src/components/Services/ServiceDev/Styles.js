import styled from "styled-components";

export const ServiceDevContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0.4%;

  .servicedev-content-area {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      object-fit: cover;
      max-height: 70vh;
      max-width: 100%;
    }
  }

  .servicedev-slider-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    button {
      border: none;
      background-color: var(color-bg-1);
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
      }
    }
  }
`;

export const ServiceTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;

  h1 {
    color: var(--color-title);
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    max-width: 578px;
    color: var(--color-subtitle);
    text-align: center;
    margin-top: 1rem;
  }
`;
