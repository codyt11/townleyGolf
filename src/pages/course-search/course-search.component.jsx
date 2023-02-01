import React, {useState} from "react";
import axios from "axios";
import CourseList from "../../components/courseList/CourseList";
import fetchLocation from "../../api/course-search-api";
import Courses from "../../components/Courses/courses";

function CourseSearches(){
  const [coords, setCoords] = useState([]);
  const [error, setError] = useState("");
  const [courseNames, setCourseNames] =useState([]);

  const getData = () => {
    fetchLocation()
    .then(res => {
      console.log(res.data.latitude);
      setCoords(res.data);
    }, [])
    .catch(err => {
      console.log("error fetching data!", err.message)
      setError(err)
      return err;
    });
  }
  useEffect(() => {
    getData();
  }, []);

  const options = {
    method: 'GET',
    url: 'https://golf-course-finder.p.rapidapi.com/courses',
    params: {radius: '10', lat: coords.latitude, lng: coords.longitude},
    headers: {
      'X-RapidAPI-Key': '766f20fe2fmsh8aaffdbaa133589p168bffjsn6607075027b8',
      'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setCourseNames(response.data.courses)
  },[]).catch(function (error) {
    console.error(error);
  });

  return(
    <div className="courseSearch">
        <h1>Courses near you!</h1>
        <CourseList getData={getData} coords={coords}/>
        <Courses  error={error} courseNames={courseNames} />
    </div>
  )
  
};

export default CourseSearches;