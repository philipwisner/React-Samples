import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'


const Home = () => (
  <h2>Home</h2>
)

const About = () => (
  <h2>About</h2>
)

const Topics = () => (
  <h2>Topics</h2>
)

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
          
           <Route exact path ='/' component={Home} />
           <Route path ='/about' component={About}/>
           <Route path ='/topics' component={Topics}/>
        </div>
      </Router>
    );
  }
}

// Add exact to path so that it only renders home component when at pure url


export default App;
