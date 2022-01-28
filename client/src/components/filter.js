import "./filter.css";
import Axios from "axios";
import { useState, useRef } from "react";
import { FaDribbble, FaRegTimesCircle } from "react-icons/fa";

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

const Filter = ({ parentCallback }) => {
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

  // useState
  const [baseURLFetchCourses, setBaseURLFetchCourses] = useState(
    "http://localhost:3001/api/fetch_courses"
  );

  const [activeRenderAllCoureses, setActiveRenderAllCourses] = useState(true);
  const [activeRenderAllCoursesByPrice, setActiveRenderAllCoursesByPrice] =
    useState(true);

  // useRef
  const beginnerBtnRef = useRef();
  const middleBtnRef = useRef();
  const advanceBtnRef = useRef();
  const freeBtnRef = useRef();
  const payBtnRef = useRef();

  // Fucntions

  const removeActiveClass = (buttons) => {
    Array.from(buttons).forEach((item) => {
      if (item.className === "active") {
        item.classList.remove("active");
      }
    });
  };

  const hightlightBtnCourse = (e) => {
    const buttonChooseLevel = e.target;
    const allCourseBtn = e.target.parentNode.children;

    removeActiveClass(allCourseBtn);

    if (buttonChooseLevel.className === "active") {
      buttonChooseLevel.classList.remove("active");
    } else {
      setActiveRenderAllCourses(false);
      buttonChooseLevel.classList.add("active");
    }
  };

  const sendDataToParentComponent = (data) => {
    parentCallback(data);
  };

  const renderCoursesByLevel = async (e) => {
    const level = e.target.children[0].value;
    const URL = "http://localhost:3001/api/fetch_courses/level";
    const coursesByLevel = await Axios.get(`${URL}/${level}`);
    sendDataToParentComponent(coursesByLevel.data);
  };

  const getOutFilterByClass = () => {
    setActiveRenderAllCourses(true);

    beginnerBtnRef.current.classList.remove("active");
    middleBtnRef.current.classList.remove("active");
    advanceBtnRef.current.classList.remove("active");

    // Fetch all courses with all levels
    const baseURL = "http://localhost:3001";
    Axios.get(baseURL).then((data) => {
      const allCourses = data.data;
      sendDataToParentComponent(allCourses);
    });
  };

  const getOutFilterByPrice = (e) => {
    setActiveRenderAllCoursesByPrice(true);

    freeBtnRef.current.classList.remove("active");
    payBtnRef.current.classList.remove("active");

    // URL homepage is also the place can fetch all courses
    Axios.get("http://localhost:3001").then((data) => {
      const courses = data.data;
      sendDataToParentComponent(courses);
    });
  };

  const fetchCoursesByTypePrice = (typePrice) => {
    // typePrice props in server mysql have been typed boolean
    // typePrice = 1(true) means must be pay money, typePrice = 0(false) means free
    const URL = "http://localhost:3001/api/fetch_courses/type_price";

    Axios.get(`${URL}/${typePrice}`).then((data) => {
      console.log("data from type price server");
      parentCallback(data.data);
    });
  };

  const hightlightBtnPriceCourse = (e) => {
    const allBtnTypePrice = e.target.parentNode.children;
    const buttonTypePrice = e.target;
    const typePrice = e.target.children[0].value;

    setActiveRenderAllCoursesByPrice(false);
    removeActiveClass(allBtnTypePrice);

    if (buttonTypePrice.className === "active") {
      buttonTypePrice.classList.remove("active");
    } else {
      buttonTypePrice.classList.add("active");
    }

    fetchCoursesByTypePrice(typePrice);
  };

  return (
    <div className="filter">
      <div className="filter-leftbar">
        <div className="filter-bylevel">
          {activeRenderAllCoureses ? (
            <h3 className="title">Filter by level</h3>
          ) : (
            <span>
              <FaRegTimesCircle
                onClick={getOutFilterByClass}
                className="icon"
              />
            </span>
          )}
          <div className="filter-bylevel-class btn-class">
            <span
              ref={beginnerBtnRef}
              onClick={(e) => {
                hightlightBtnCourse(e);
                renderCoursesByLevel(e);
              }}
            >
              <input type="hidden" value="beginner" />
              Beginner
            </span>
            <span
              ref={middleBtnRef}
              onClick={(e) => {
                hightlightBtnCourse(e);
                renderCoursesByLevel(e);
              }}
            >
              <input type="hidden" value="middle" />
              Middle class
            </span>
            <span
              ref={advanceBtnRef}
              onClick={(e) => {
                hightlightBtnCourse(e);
                renderCoursesByLevel(e);
              }}
            >
              <input type="hidden" value="advance" />
              advanced
            </span>
          </div>
        </div>

        <div className="filter-byprice">
          {activeRenderAllCoursesByPrice ? (
            <h3 className="title">Filter by Price</h3>
          ) : (
            <span>
              <FaRegTimesCircle
                onClick={getOutFilterByPrice}
                className="icon"
              />
            </span>
          )}
          <div className="filter-byprice-class btn-class">
            <span ref={freeBtnRef} onClick={hightlightBtnPriceCourse}>
              <input type="hidden" value="0" />
              free
            </span>
            <span ref={payBtnRef} onClick={hightlightBtnPriceCourse}>
              <input type="hidden" value="1" />
              pay
            </span>
          </div>
        </div>
      </div>
      <div className="filter-rightbar">
        <div className="filter-bytech">
          <h3 className="title">Filter by Tech</h3>
          <div className="filter-bytech-list">
            {listTech.map((tech, index) => {
              return (
                <div key={tech + "-" + index} className="filter-bytech-item">
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
