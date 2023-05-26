import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <section id="content">
      <div className="containers">
        <div className="left"></div>
        <div className="right">
          <h2>Présentation</h2>
          <p>
            Je m'appelle Guillaume Laliberté, et je suis ravi de pouvoir me
            présenter. Pendant les dix dernières années, j'ai exercé en tant que
            mécanicien, acquérant une solide expérience dans ce domaine.
            Cependant, récemment, j'ai décidé de faire une reconversion
            professionnelle passionnante vers le domaine du web. Au cours des
            dernières années, j'ai réalisé que ma véritable passion réside dans
            les technologies numériques. J'ai donc décidé de me lancer dans
            cette aventure et de me former activement dans ce domaine en
            autodidacte et via openclassroom. <br /> J'ai appris à coder, à
            développer des sites web et à maîtriser les outils numériques
            essentiels. Ce qui me caractérise, c'est ma volonté de travailler
            dur et de m'impliquer pleinement dans tout ce que j'entreprends. Que
            ce soit en équipe ou en travaillant seul, je suis à l'aise et je
            m'adapte rapidement aux situations. J'apprécie la collaboration et
            la possibilité d'apprendre des autres, tout en étant capable de
            prendre des décisions et de mener des projets de manière autonome.{" "}
            <br /> À court terme, mon objectif est de continuer à acquérir de
            l'expérience dans le domaine du web en travaillant sur divers
            projets et en collaborant avec d'autres professionnels. Je souhaite
            développer mes compétences techniques et élargir mes connaissances
            dans des domaines tels que le développement web et la gestion de
            projets. À plus long terme, j'aspire à fonder ma propre entreprise
            dans le domaine du web. Je suis animé par l'esprit d'entrepreneuriat
            et je souhaite créer des solutions numériques innovantes qui
            répondent aux besoins des utilisateurs.
          </p>
          <div className="link">
            <Link to="https://www.google.com" target="_blank">
              Linkedin
            </Link>
            <Link to="https://www.google.com" target="_blank">
              CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
