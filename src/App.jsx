import './App.scss';
import React from 'react';
import Header from './shared/Header'
import Home from './containers/Home';
import { useRoutes } from 'hookrouter';
import Login from './containers/Login';
import Register from './containers/Register';
import NotFound from './components/errors/404'

const App = () => {
  const Routes = {
    '/': () => <Home />,
    '/login': () => <Login />,
    '/register': () => <Register />
  }
  return (
    <div className="react-auth-app">
      <Header />
      {useRoutes(Routes) || <NotFound />}
    </div>
  )
}

export default App;
