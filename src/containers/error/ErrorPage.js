import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section id="error">
      <div className="background-error">
        <h1>404</h1>
        <p>Erreur! La page demandez n'est pas accessible</p>
        <NavLink to="/">Acceuil</NavLink>
      </div>
    </section>
  );
};

export default Error;
