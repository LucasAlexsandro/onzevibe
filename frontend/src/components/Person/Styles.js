import styled from "styled-components";

export const PersonSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  
  .title {
  }

  .person-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    .person-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      img {
        width: 250px;
        height: 250px;
        background-color: #fff;
        border-radius: 100%;
        object-fit: cover;
      }
      h3 {
        margin-top: 1.5rem;
        font-size: 1.5rem;
        color: var(--primary);
        line-height: 0;
      }
      p {
        font-size: 1rem;
        color: #ccc;
      }
      .person-social {
        display: flex;
        a {
          background-color: #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          margin: 0.6rem;
          width: 40px;
          height: 40px;
          background: #121212;

          i {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ccc;
          }
        }
      }
    }
  }
  .person-join-team {
    button {
      background: #121212;
      border: none;
      border-radius: 40px;
      font-size: 1.4rem;
      color: #ccc;
      padding: 1.4rem 2.5rem;
    }
  }
`;
