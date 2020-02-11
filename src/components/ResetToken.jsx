import React from 'react'
import { Redirect, Route } from 'react-router'
import { verifyResetToken } from '../services/auth.service'

export const ResetToken = ({ component: Component, loggedIn, computedMatch, ...rest }) => {
  verifyResetToken(computedMatch.params.token).then(response => {
    return (
      <Route {...rest} render={props => (
        !loggedIn && response.data.data.status ? <Component {...props} /> : <Redirect to='/' />
      )} />
    )
  })
}