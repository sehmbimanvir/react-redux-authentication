import React from 'react'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../components/errors/404'
import { isLoggedIn } from '../services/auth.service'
import { Switch, Route, Redirect } from 'react-router-dom'

const Router = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <GuestRoute path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (isLoggedIn()) {
    return <Component {...rest} />
  }
  return <Redirect to='/login' />
}

const GuestRoute = ({ component: Component, ...rest }) => {
  console.log('Is Logged In', isLoggedIn())
  if (!isLoggedIn()) {
    return <Component {...rest} />
  }
  return <Redirect to='/' />
}

export default Router