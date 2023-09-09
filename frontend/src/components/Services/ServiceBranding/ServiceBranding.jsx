import React from "react";
import { ServiceTitle } from "../ServiceDev/Styles";
import { ServiceBrandingContainer } from "./Styles";

export default function ServiceBranding() {
  return (
    <>
      <ServiceBrandingContainer id="service-branding">
        <ServiceTitle>
          <h1>Branding</h1>
          <p>
            Were pretty sure everyone wants higher conversion rates and better
            recognition. Dont worry, we got you covered!
          </p>
        </ServiceTitle>
      </ServiceBrandingContainer>
    </>
  );
}
