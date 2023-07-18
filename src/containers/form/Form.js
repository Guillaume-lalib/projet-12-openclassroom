import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../modal/Modal";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y26oeh7",
        "template_slnnbcg",
        form.current,
        "XdHgtJK9zMa3bPBvU"
      )
      .then(
        (result) => {
          setShow(true);
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [show, setShow] = useState(false);
  return (
    <section id="form">
      <div className="background-form">
        <h2>Contacter moi</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="left-form">
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" placeholder="Votre nom" required />
            <label htmlFor="objet">Objet</label>
            <input
              type="text"
              name="objet"
              placeholder="objet de la demande"
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Votre e-mail"
              required
            />
          </div>
          <div className="right-form">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Votre message ici!"
              required
            />
          </div>
          <input className="confirm" type="submit" value="Envoyer" />
        </form>
      </div>
      <Modal show={show} setShow={setShow}>
        <h1>Message Envoyé</h1>
        <p>Une réponse vous sera transmise dans les plus bref delai</p>
      </Modal>
    </section>
  );
};

export default Form;
