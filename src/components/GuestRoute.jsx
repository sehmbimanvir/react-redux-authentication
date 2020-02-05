import React from 'react'
import { Redirect, Route } from 'react-router'

export const GuestRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    !loggedIn ? <Component {...props} /> : <Redirect to='/' />
  )} />
)