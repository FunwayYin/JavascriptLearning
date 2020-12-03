import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './page/home/App';
import Lesson1 from './page/lesson1/Lesson1';
import Lesson2 from './page/lesson2/Lesson2';
import Lesson3 from './page/lesson3/Lesson3';
import Lesson4 from './page/lesson4/Lesson4';
import Lesson5 from './page/lesson5/Lesson5';
import Lesson6 from './page/lesson6/Lesson6';
import Lesson7 from './page/lesson7/Lesson7';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router  key="xxx">
          <Route exact  path="/" component={App}  />
          <Route exact path="/App" component={App}   />
          <Route exact path="/Lesson1" component={Lesson1}   />
          <Route exact path="/Lesson2" component={Lesson2}   />
          <Route exact path="/Lesson3" component={Lesson3}   />
          <Route exact path="/Lesson4" component={Lesson4}   />
          <Route exact path="/Lesson5" component={Lesson5}   />
          <Route exact path="/Lesson6" component={Lesson6}   />
          <Route exact path="/Lesson7" component={Lesson7}   />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
