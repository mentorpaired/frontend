import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      </div>
    );
}

export default App;
