import React from 'react'
import {
  Link,
  Route
} from 'react-router-dom'

function Topic ({match}) {
  return <h3>{match.params.topicId}</h3>
}

export default function Topics ({match}) {
  return (
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
}


//Using TopicID because we are rendering the same component for each route