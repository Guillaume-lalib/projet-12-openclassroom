import React from "react";
import Project from "../project/Project";
// import pc from "../../image/laptop-g1fe6abe60_640.png";

const Openclass = () => {
  return (
    <section id="openclass">
      <h2>Mes competences et outils</h2>
      <div className="list">
        <div className="language">
          <div className="bubble">
            <i className="fa-brands fa-html5"></i>HTML
          </div>
          <div className="bubble">
            <i className="fa-brands fa-css3-alt"></i>CSS
          </div>
          <div className="bubble">
            <i className="fa-brands fa-sass"></i>SASS
          </div>
          <div className="bubble">
            <i className="fa-brands fa-js"></i>JAVASCRIPT
          </div>
          <div className="bubble">
            <i className="fa-brands fa-react"></i>REACTJS
          </div>
          <div className="bubble">
            <i className="fa-solid fa-arrow-up-short-wide"></i>SEO
          </div>
          <div className="bubble">
            <i className="fa-solid fa-wheelchair"></i>ACCESSIBILITÉ
          </div>
          <div className="bubble">
            <i className="fa-solid fa-arrow-trend-up"></i>PERFORMANCE
          </div>
          <div className="bubble">
            <i className="fa-brands fa-github"></i>GIT / GITHUB
          </div>
          <div className="bubble">
            <i className="fa-solid fa-mobile-screen-button"></i>RESPONSIVITÉ
          </div>
        </div>
      </div>
      <Project />
    </section>
  );
};

export default Openclass;
