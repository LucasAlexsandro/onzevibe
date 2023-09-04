import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${props => (props.isTrue ? 'fixed' : 'relative')};
  background-color: ${props => (props.isTrue ? 'var(--color-black)' : 'transparent')};;

  nav {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    a {
      color: #fff;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .number-link {
        font-size: 10px;
      }
      &:hover {
        color: var(--color-primary);
      }
    }
    img {
      max-width: 50px;
    }
  }
`;
