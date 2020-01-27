import React from 'react'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../components/errors/404'
import { useRoutes } from 'hookrouter'

const routeLinks = {
  '/': () => <Home />,
  '/login': () => <Login />,
  '/register': () => <Register />
}

const Router = () => {
  return (
    <>
      {useRoutes(routeLinks) || <NotFound />}
    </>
  )
}

export default Router