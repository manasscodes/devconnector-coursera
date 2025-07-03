import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/register'
            element={
              <section className='container'>
                <Register />
              </section>
            }
          />
          <Route
            path='/login'
            element={
              <section className='container'>
                <Login />
              </section>
            }
          />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
