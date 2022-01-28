import { useState, useEffect } from "react";
import Quote from "../components/quote";
import Filter from "../components/filter";
import Course from "../components/course";
import Axios from "axios";

const styleContent = {
  width: "min(90%, 1200px)",
  marginInline: "auto",
  position: "relative",
  zIndex: "1",
  overflow: "hidden",
};

const Home = () => {
  const [courses, setCourses] = useState([]);
  //const [baseURL, setBaseURL] = useState("http://localhost:3001");
  const [baseURL, setBaseURL] = useState(
    "https://shopcourses-filter.herokuapp.com"
  );

  useEffect(() => {
    Axios.get(baseURL).then((res) => {
      const listCourses = res.data;

      listCourses.forEach((item) => {
        setCourses((list) => [...list, item]);
      });
    });
  }, []);

  const callback = (childDataOfCourses) => {
    let listCourses = [];
    childDataOfCourses.forEach((item) => {
      listCourses.push(item);
    });

    // Setup the new courses after click the level course want to be learn
    setCourses(listCourses);
  };

  return (
    <div className="content" style={styleContent}>
      <Quote />
      <Filter parentCallback={callback} />
      <div className="course">
        <div className="course-list">
          {courses.map((course, index) => {
            return (
              <Course
                key={`${course.name}-${index}`}
                name={course.name}
                price={course.price}
                typePrice={course.typePrice}
                level={course.level}
                description={course.description}
                imageName={course.imageName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
