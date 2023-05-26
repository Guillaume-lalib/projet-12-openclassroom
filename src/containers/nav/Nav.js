import React from "react";
import Portfolio from "../../image/portfolio.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={Portfolio} alt="logo du site - portfolio" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#content">Présentation</a>
          </li>
          <li>
            <a href="#openclass">Compétence</a>
          </li>
          <li>
            <a href="#projectList">Projet</a>
          </li>
          <li>
            <a href="#form">Contactez moi</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
