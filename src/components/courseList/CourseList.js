import React, {useState, useEffect} from "react";
import axios from "axios";
import Courses from "../Courses/courses";
import fetchLocation from "../../api/course-search-api";

const CourseList = props => {
  let [coords, setCoords] =useState([]);
  const getData = () => {
    
      fetchLocation()
    .then(res => {
      console.log(res.data,"hello");
      setCoords(res.data)
    })
    .catch(err => {
      console.log("error fetching data!", err.message)
      return err;
    });
  };

  let [courses, setCourses] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://golf-course-finder.p.rapidapi.com/courses',
    params: {radius: '10', lat: coords.latitude, lng: coords.longitude},
    headers: {
      'X-RapidAPI-Key': '43873fa12fmsha809b88e5edd4b1p1482d8jsn0817f83307b3',
      'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
    }
  };
  
  const fetchCourses = ()=> {
  axios.request(options).then(async function (response) {
    console.log(response.data);
    return response.data 
  }).catch(function (error) {
    console.error(error);
  });
};

const getCourses = () => {
  fetchCourses().then(res => {
    console.log(res.data,"hello");
    return res.data
  })
  .catch(err => {
    console.log("error fetching data!", err.message)
    return err;
  });
};

const handleGetCourses = e => {
  e.preventDefault();
  getCourses();
};

  const handleGetData = e => {
    e.preventDefault();
    getData();
  };

  
  return (
    <>
      
        <button onClick={handleGetData}>Get Data</button>
        <button onClick={handleGetCourses}>Get Courses</button>
    
      {/* <Courses coords={coords} courses={courses}/> */}

    </>
  );
  
};

export default CourseList;
