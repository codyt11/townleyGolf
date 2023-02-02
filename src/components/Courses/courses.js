import React, {useState, useEffect} from "react";
import axios from "axios";

async function Courses(props){
  console.log(props)
  return (
    <div>hello
          {/* {await props.courses.map((course, index) => (
            <div className="course" key={index}>
              <h1>{course.name}</h1>
            </div>
          ))} */}
        </div>
  );
};

export default Courses;