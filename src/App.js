import React from 'react';
import {Route , BrowserRouter , Switch} from 'react-router-dom'
import Dashboard from './dashboard/dashboard';
import Profile from './mycomponents/profile/profile';


import './App.css';

function App() {
  
  

  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard}   />
        <Route path="/profile" component={Profile} />
      </Switch>
     
      </BrowserRouter>

    </div>

  );
}

export default App;
