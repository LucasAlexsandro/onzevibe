import styled from 'styled-components';

export const BioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  padding: 1rem;

  .logo-bio {
    max-width: 250px;
    img {
      width: 100%;
    }
  }

  .wrapper-bio {
    width: 100%;
    max-width: 500px;
    margin-top: 1rem;

    .item-bio {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      width: 100%;
      background-color: #121212;
      padding: 1rem;
      border-radius: 10px;
      font-size: 1.5rem;
      color: #fff;

      img {
        max-width: 50px;
      }

      span {
        margin-left: 2rem;
      }
    }
  }
`;
