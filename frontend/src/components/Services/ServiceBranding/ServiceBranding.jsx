import { ServiceTitle } from "../ServiceDev/Styles";
import { ServiceBrandingContainer } from "./Styles";

//https://br.freepik.com/autor/vecstock

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
        <div className="service-branding-content">
          <img src="/branding2.png" alt="https://br.freepik.com/autor/vecstock"/>
        </div>
      </ServiceBrandingContainer>
    </>
  );
}
