import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props V. State
        </Link>
      </li>
    </ul>
    
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
        <h3>Please Select a Topic</h3>
      )}/>
  </div>
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
