import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './course-search.css';
import axios from "axios";

const CourseSearch = () => {

    const options = {
        method: 'GET',
        url: 'https://golf-course-finder.p.rapidapi.com/courses',
        params: {radius: '10', lat: '36.56910381018662', lng: '-121.95035631683683'},
        headers: {
          'X-RapidAPI-Key': '43873fa12fmsha809b88e5edd4b1p1482d8jsn0817f83307b3',
          'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
    // const fetchCourse = (id) => {
    //     axios
    //       .get(`http://localhost:5000/api/movies/${id}`)
    //       .then((res) => setMovie(res.data))
    //       .catch((err) => console.log(err.response));
    //   };

    return(
    <Container className="container">
        <Form className="search">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Zip Code for Search</Form.Label>
            <Form.Control type="email" placeholder="Zip Code" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </Container>
    )
};

export default CourseSearch;