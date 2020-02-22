import React from 'react'
import NotFound from '../components/errors/404'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRoute'
import { GuestRoute } from '../components/GuestRoute'
import { connect } from 'react-redux'
import Home from '../containers/Home'

import { Login, Register, Forgot, Reset } from '../containers/Auth'

const Router = ({ isLoggedIn }) => {
  return (
    <Switch>
      <PrivateRoute loggedIn={isLoggedIn} path="/" exact component={Home} />
      <GuestRoute loggedIn={isLoggedIn} path="/login" component={Login} />
      <GuestRoute loggedIn={isLoggedIn} path="/register" component={Register} />
      <GuestRoute loggedIn={isLoggedIn} path="/forgot" component={Forgot} />
      <GuestRoute loggedIn={isLoggedIn} path="/reset/:token" component={Reset} />
      <Route component={NotFound} />
    </Switch>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(Router)