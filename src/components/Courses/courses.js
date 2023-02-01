import React from "react";

function Courses(props){
  
  return (
    <>
    <h1>hello world</h1>
    <section className="course-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          {props.courseNames.map((course, index) => (
            <div className="course" key={index}>
              <h1>{course.name}</h1>
            </div>
          ))}
        </div>
      )}
    </section>
    </>
  );
};

export default Courses;