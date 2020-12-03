import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {withRouter } from "react-router";

function App() {
  return (
    <div className="App" key="App">
        <Router>
            <ul>
                <li><Link to="/App">App</Link></li>
                <li><Link to="/Lesson1">Lesson1</Link></li>
                <li><Link to="/Lesson2">Lesson2</Link></li>
                <li><Link to="/Lesson3">Lesson3</Link></li>
                <li><Link to="/Lesson4">Lesson4</Link></li>
                <li><Link to="/Lesson5">Lesson5</Link></li>
                <li><Link to="/Lesson6">Lesson6</Link></li>
                <li><Link to="/Lesson7">Lesson7</Link></li>
            </ul>
        </Router>
    </div>
  );
}

export default withRouter(App);
