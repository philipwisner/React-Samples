import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import '../css/App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>
          
          <hr/>
           <Route exact path ='/' component={Home} />
           <Route path ='/about' component={About} />
           <Route path ='/topics' component={Topics} />
        </div>
      </Router>
    );
  }
}

// Add exact to path so that it only renders home component when at pure url


export default App;
