import './App.scss';
import React from 'react';
import Header from './shared/Header'
import Routes from './routes'

const App = () => {
  return (
    <div className="react-auth-app">
      <Header />
      <Routes />
    </div>
  )
}

export default App;
