import styled from "styled-components";

export const ServiceBrandingContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0 4%;

  .service-branding-content {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    img {
      object-fit: cover;
      max-height: 70vh;
      max-width: 100%;
    }
  }
`;