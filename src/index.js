import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch, // Import Switch from react-router-dom
  Redirect
} from 'react-router-dom'

import './style.css'
import Investor from './views/investor'
import Schemes from './views/schemes'
import Bank from './views/bank'
import Home from './views/home'
import More from './views/more'
import NotFound from './views/not-found'
import Login from './views/Login'
import Register from './views/Register'
import Company from './views/company'
import contactUs from './views/contactUs'
import CreateProfile from './views/CreateProfile'

const App = () => {
  return (
    <Router>
      <Switch>
      <Route component={Login} exact path="/Login" />
      <Route component={Register} exact path="/Register" />
        <Route component={Investor} exact path="/investor" />
        <Route component={Schemes} exact path="/schemes" />
        <Route component={Bank} exact path="/bank" />
        <Route component={Company} exact path="/company" />
        <Route component={contactUs} exact path="/contactUs" />
        <Route exact path="/create-profile" component={CreateProfile} />
        <Route component={More} exact path="/more" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
