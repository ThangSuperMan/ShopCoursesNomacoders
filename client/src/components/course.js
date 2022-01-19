import React from "react";
import "./course.css";
import imageCourse1 from "../assets/course1.jpeg";
import imageCourse2 from "../assets/course2.jpeg";
import imageCourse3 from "../assets/course3.jpeg";
import imageCourse4 from "../assets/course4.jpeg";

const course = () => {
  return (
    <div className="course">
      <div className="course-list">
        <div className="course-item">
          <div className="course-item-image">
            <div>
              <img src={imageCourse1} />
              <span className="course-item-typeclass beginner">beginner</span>
            </div>
            <div>
              <h3 className="course-item-title">
                [Full Stack] Youtube Clone Coding
              </h3>
              <span className="course-item-desc">
                Youtube Backend + Fondent + Distribution
              </span>
            </div>
          </div>
        </div>

        <div className="course-item">
          <div className="course-item-image">
            <div>
              <img src={imageCourse2} />
              <span className="course-item-typeclass middle">beginner</span>
            </div>
            <div>
              <h3 className="course-item-title">
                [Full Stack] Youtube Clone Coding
              </h3>
              <span className="course-item-desc">
                Youtube Backend + Fondent + Distribution
              </span>
            </div>
          </div>
        </div>

        <div className="course-item">
          <div className="course-item-image">
            <div>
              <img src={imageCourse4} />
              <span className="course-item-typeclass advance">advance</span>
            </div>
            <div>
              <h3 className="course-item-title">
                [Full Stack] Youtube Clone Coding
              </h3>
              <span className="course-item-desc">
                Youtube Backend + Fondent + Distribution
              </span>
            </div>
          </div>
        </div>

        <div className="course-item">
          <div className="course-item-image">
            <div>
              <img src={imageCourse3} />
              <span className="course-item-typeclass advance">beginner</span>
            </div>
            <div>
              <h3 className="course-item-title">
                [Full Stack] Youtube Clone Coding
              </h3>
              <span className="course-item-desc">
                Youtube Backend + Fondent + Distribution
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default course;
