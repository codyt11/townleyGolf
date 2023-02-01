import React from "react";
import axios from "axios";

const CourseList = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  
  
  return (
    <>
        <button onClick={handleGetData}>Get Data</button>    
    </>
  );
  
};

export default CourseList;
