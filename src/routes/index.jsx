import React from 'react'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Forgot from '../containers/Forgot'
import NotFound from '../components/errors/404'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRoute'
import { GuestRoute } from '../components/GuestRoute'
import { connect } from 'react-redux'
import Reset from '../containers/Reset'

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