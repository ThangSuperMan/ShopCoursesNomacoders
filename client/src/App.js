import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Header from "./components/header";
import Quote from "./components/quote";
import Filter from "./components/filter";
import Course from "./components/course";
import Footer from "./components/footer";
import "./components/responsive.css";
import "./components/course.css";

const styleContent = {
  width: "min(90%, 1200px)",
  marginInline: "auto",
  position: "relative",
  zIndex: "1",
  overflow: "hidden",
};

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const baseURL = "http://localhost:3001";

    Axios.get(baseURL).then((res) => {
      const listCourses = res.data;

      listCourses.forEach((item) => {
        setCourses((list) => [...list, item]);
      });
    });
  }, []);

  const callback = (childData) => {
    let listCourses = [];
    childData.forEach((item) => {
      listCourses.push(item);
    });

    setCourses(listCourses);
  };

  return (
    <div className="App">
      <Header />
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
