import styled from "styled-components";
import Icon from "../../assets/ICON.png";

export const MobileContainer = styled.header`
  max-width: 750px;
  width: 100%;
  height: 90px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  img {
    max-height: 70%;
  }
`;

export default function HeaderMobile() {
  return (
    <>
      <MobileContainer>
        <img src={Icon} />
        <div>
          <span>Menu</span>
          <span>Icon here</span>
        </div>
      </MobileContainer>
    </>
  )
}
