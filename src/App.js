import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Blog from './pages/blog/blog.component';
import CourseSearch from './pages/course-search/course-search.component';
import Hot100 from './pages/hot100/hot100.component';
import Leaderboard from './pages/leaderboard/leaderboard.component';
import Weather from './pages/weather/weather.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
          <Route exact path='/course-search' element={<CourseSearch/>}/>
          <Route exact path='/hot100' element={<Hot100/>}/>
          <Route exact path='/leaderboard' element={<Leaderboard/>}/>
          <Route exact path='/weather' element={<Weather/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;