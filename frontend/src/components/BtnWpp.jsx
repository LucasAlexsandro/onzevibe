import styled from "styled-components"

export const ButtonWpp = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  border: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;

  img {
    max-width: 100%;
    width: 100%;
  }
`;

export default function BtnWpp() {
  return (
    <ButtonWpp>
      <img src="https://i.pinimg.com/originals/d9/d9/7d/d9d97d48264770f85d35c208f279152c.png" />
    </ButtonWpp>
  )
}
