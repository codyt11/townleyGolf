import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './course-search.css';

const CourseSearch = () => {
  const [golfCourses, setGolfCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formState, setFormState] = useState('');

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://golf-course-finder.p.rapidapi.com/courses',
          params: { radius: '10', lat: latitude, lng: longitude },
          headers: {
            'X-RapidAPI-Key': '43873fa12fmsha809b88e5edd4b1p1482d8jsn0817f83307b3',
            'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com',
          },
        };
  
        const response = await axios.request(options);
  
        // Filter out duplicates
        const uniqueCourses = [];
        response.data.courses.forEach(course => {
          if (!uniqueCourses.some(uniqueCourse => uniqueCourse.name === course.name)) {
            uniqueCourses.push(course);
          }
        });
  
        setGolfCourses(uniqueCourses);
        console.log(uniqueCourses);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [latitude, longitude]);
  
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === 'city') {
      setFormCity(value);
    } else if (name === 'state') {
      setFormState(value);
    }
  };


  const handleSubmit = (event) => {
      event.preventDefault();
      // Collect form data
      const formData = new FormData(event.target);
      const city = formData.get('city');
      const state = formData.get('state');

      // Validate form data
      if (!city || !state) {
        alert('Please enter both a city and state.');
        return;
      }

      // Set city and state in state
      setCity(city);
      setState(state);
  };
  
  
  useEffect(() => {
    const getCoords = async () => {
      await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city}+${state}&key=0ed458d4c5074861bd244c16575514af&language=en&pretty=1`)
      .then(function (response) {
        // handle success
        setLatitude(response.data.results[0].geometry.lat)
        setLongitude(response.data.results[0].geometry.lng)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
      getCoords();
  }, [city, state]);

  return (
    <Container className="container">
      <Form className="search" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>Enter City</Form.Label>
          <Form.Control
            type="string"
            placeholder="City"
            name="city"
            value={formCity}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicState">
          <Form.Label>Enter State</Form.Label>
          <Form.Control
            type="string"
            placeholder="State"
            name="state"
            value={formState}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        
          {golfCourses.map((golfCourse) => (
            <div key={golfCourse.name}>
              <h2>{golfCourse.name}</h2>
              <p>{golfCourse.description}</p>
              {/* add other data points as needed */}
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export default CourseSearch;
