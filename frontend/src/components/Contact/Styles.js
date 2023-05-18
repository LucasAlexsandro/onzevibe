import styled from "styled-components";
import BgContact from '../../assets/bg-contact.png';

export const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0;

  .contact-area {
    display: grid;
    grid-template-columns: 1fr;

    .contact-form {
      form {
        display: flex;
        flex-direction: column;

        input {
          width: 100%;
          margin-top: 1rem;
          padding: 2rem;
          border: none;
          background-color: rgb(18, 18, 18);
          border-radius: 10px;
          color: #ccc;
        }

        input[type="submit"] {
          background-color: var(--primary);
          cursor: pointer;
          color: #fff;
          font-weight: bold;
          font-size: 1.1rem;
          max-width: 300px;
        }

        textarea {
          border-radius: 10px;
          margin-top: 1rem;
          padding: 1.5rem;
          border: none;
          background-color: rgb(18, 18, 18);
          color: #ccc;
        }

        .alerts {
          margin-top: 1rem;
          text-align: center;
          .alert-error {
            color: red;
          }
          .alert-success {
            color: green;
          }
        }
      }
    }
  }
`;
