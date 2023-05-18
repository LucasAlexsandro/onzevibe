import React, { useState } from "react";
import { ContactContainer } from "./Styles";
import { Container } from "../../pages/Home/style";
import { Title } from "../Services/style";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [info, setInfo] = useState("");
  const [alertError, setAlertError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || tel === "" || info === "") {
      setInterval(() => {
        setAlertError(false);
      }, 4000);
      setAlertError(true);
      return;
    }

    // Template de email
    const templateParams = {
      from_name: name,
      tel: tel,
      email: email,
      message: info,
    };

    // Config emailJS
    emailjs
      .send(
        "service_boo3m8t",
        "template_hqhbl8b",
        templateParams,
        "vpMpsMnf2Kt8f4ozS"
      )
      .then(
        (response) => {
          setName("");
          setEmail("");
          setTel("");
          setInfo("");
          setAlertError(false);
          setInterval(() => {
            setAlertSuccess(false);
          }, 4000);
          setAlertSuccess(true);
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }

  return (
    <ContactContainer>
       <Title>
          <span>Contato</span>
        </Title>
      <Container>
        <div className="contact-area">
          <div className="contact-content">
            
          </div>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Nome"
                className="w-100 p-3 mt-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Telefone"
                className="w-100 p-3 mt-3"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-100 p-3 mt-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows="5"
                placeholder="Informações"
                className="w-100 p-3 mt-3"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              ></textarea>
              <input type="submit" className="" value="Falar agora" />
              <div className="alerts">
                {alertError ? (
                  <>
                    <div class="alert-error">
                      Ops, Algo deu errado! Por favor, verifique se preencheu
                      todos os campos.
                    </div>
                  </>
                ) : null}
              </div>
              {alertSuccess ? (
                <div class="alert-success">
                  Dados enviados com sucesso! Em breve estarei entrando em
                  contato.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </Container>
    </ContactContainer>
  );
}
