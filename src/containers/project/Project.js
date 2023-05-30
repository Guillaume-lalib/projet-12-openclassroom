import React from "react";
import { Link } from "react-router-dom";
import dataP from "./project.json";
const Project = () => {
  return (
    <div id="projectList">
      <h2>Exemple de projet réalisé</h2>
      <div className="grid-list">
        {dataP.map((data) => (
          <div className="card" key={data.id}>
            <div className="card-left">
              <img src={data.img} alt="" />
              <img src={data.img2} alt="" />
              <img src={data.img3} alt="" />
            </div>
            <div className="card-right">
              <h3>{data.title}</h3>
              <h4>{data.content}</h4>
              <p>{data.mission}</p>
              <ul>
                {data.skill.map((data) => (
                  <li>{data}</li>
                ))}
              </ul>
              <Link to={data.lien} target="_blank">
                Lien Github
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
