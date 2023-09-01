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

  .contact-area {
    display: grid;
    grid-template-columns: 1fr;

    .contact-form {
      form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
          width: 100%;
          margin-top: 1rem;
          padding: 2rem;
          background-color: var(--bg-black);
          color: #fff;
          border: none;
          border-bottom: 1px solid #ccc;
        }

        textarea {
          width: 100%;
          margin-top: 1rem;
          padding: 1.5rem;
          border: none;
          border-bottom: 1px solid #ccc;
          background-color: var(--bg-black);
          color: #fff;
        }

        input[type="submit"] {
          background-color: var(--primary);
          cursor: pointer;
          color: #fff;
          font-weight: 600;
          letter-spacing: 2px;
          font-size: 1rem;
          max-width: 300px;
          border-radius: 100px;
          padding: 1.6rem;
          margin-top: 2rem;
          border: none;
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
