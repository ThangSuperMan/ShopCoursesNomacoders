import "./filter.css";
import { useState, useEffect } from "react";

//Images for techs
import imageTechJavascript from "../assets/tech-img1.png";
import imageTechPython from "../assets/tech-img2.png";
import imageTechHTML from "../assets/tech-img3.png";
import imageTechCSS from "../assets/tech-img4.png";
import imageTechNodeJS from "../assets/tech-img5.png";
import imageTechReactJS from "../assets/tech-img6.png";
import imageTechGraphQL from "../assets/tech-img7.png";
import imageTechTypeScript from "../assets/tech-img8.png";
import imageTechGo from "../assets/tech-img9.png";
import imageTechRedux from "../assets/tech-img10.png";
import imageTechDjago from "../assets/tech-img11.png";
import imageTechNestJS from "../assets/tech-img12.png";
import imageTechFirebase from "../assets/tech-img13.png";
import imageTechReactNative from "../assets/tech-img14.png";
import imageTechNextJS from "../assets/tech-img15.png";

const Filter = () => {
  const [listTech, setListTech] = useState([
    {
      typeTech: "javascript",
      imageTech: imageTechJavascript,
      nameTech: "Javascript",
    },
    {
      typeTech: "python",
      imageTech: imageTechPython,
      nameTech: "Python",
    },
    {
      typeTech: "html",
      imageTech: imageTechHTML,
      nameTech: "HTML",
    },
    {
      typeTech: "css",
      imageTech: imageTechCSS,
      nameTech: "CSS",
    },
    {
      typeTech: "nodejs",
      imageTech: imageTechNodeJS,
      nameTech: "NodeJS",
    },
    {
      typeTech: "reactjs",
      imageTech: imageTechReactJS,
      nameTech: "ReactJS",
    },
    {
      typeTech: "graphql",
      imageTech: imageTechGraphQL,
      nameTech: "GrapQL",
    },
    {
      typeTech: "typescript",
      imageTech: imageTechTypeScript,
      nameTech: "Typescript",
    },
    {
      typeTech: "go",
      imageTech: imageTechGo,
      nameTech: "Go",
    },
    {
      typeTech: "redux",
      imageTech: imageTechRedux,
      nameTech: "Redux",
    },
    {
      typeTech: "djago",
      imageTech: imageTechDjago,
      nameTech: "Djago",
    },
    {
      typeTech: "nestjs",
      imageTech: imageTechNestJS,
      nameTech: "NestJS",
    },
    {
      typeTech: "firebase",
      imageTech: imageTechFirebase,
      nameTech: "firebase",
    },
    {
      typeTech: "reactnative",
      imageTech: imageTechReactNative,
      nameTech: "ReactNative",
    },
    {
      typeTech: "nextjs",
      imageTech: imageTechNextJS,
      nameTech: "NextJS",
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div className="filter">
      <div className="filter-leftbar">
        <div className="filter-bylevel">
          <h3 className="title">Filter by Level</h3>
          <div className="filter-bylevel-class btn-class">
            <span>Beginner</span>
            <span>Middle class</span>
            <span>advanced</span>
          </div>
        </div>

        <div className="filter-byprice">
          <h3 className="title">Filter by Level</h3>
          <div className="filter-byprice-class btn-class">
            <span>free</span>
            <span>pay</span>
          </div>
        </div>
      </div>
      <div className="filter-rightbar">
        <div className="filter-bytech">
          <h3 className="title">Filter by Tech</h3>
          <div className="filter-bytech-list">
            {listTech.map((tech) => {
              return (
                <div className="filter-bytech-item">
                  <img src={tech.imageTech} />
                  <span>{tech.nameTech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
