import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { mainPage } from 'pages'
import { hot } from 'react-hot-loader'

const App = () => {
  return(
    <div>
      <Switch>
        <Route path='/' component={mainPage} />
      </Switch>
    </div>
  )
}

export default hot(module)(App);
