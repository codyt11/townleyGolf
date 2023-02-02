
import React, {useState} from "react";
import axios from "axios";
import CourseList from "../../components/courseList/CourseList";



function CourseSearches(){
  
  const [error, setError] = useState("");
  const [courseNames, setCourseNames] =useState([]);


  return(
    <div className="courseSearch">
        <h1>Courses near you!</h1>
        <CourseList />
    </div>
  )
  
};

export default CourseSearches;