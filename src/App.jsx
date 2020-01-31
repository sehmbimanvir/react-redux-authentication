import './App.scss';
import React from 'react';
import Header from './shared/Header'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="react-auth-app">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App;
