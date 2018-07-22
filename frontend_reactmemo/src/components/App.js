import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { mainPage } from 'pages'

const App = (props) => {
  return(
    <div>
      <Switch>
        <Route path='/' component={mainPage} />
      </Switch>
    </div>
  )
}

export default App;
