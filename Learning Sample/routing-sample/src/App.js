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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
           <Route path ='/' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
