import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route {...rest} component={props => (
    loggedIn ? <Component {...props} /> : <Redirect to='/login' />
  )} />
)