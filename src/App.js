import React , {Component} from 'react';
import {Route , BrowserRouter , Switch} from 'react-router-dom'
import Dashboard from './dashboard/dashboard';
import Profile from './mycomponents/profile/profile';
import Signin from './container/signin';

import './App.css';
 
 class App extends Component {
  constructor(){
    super();
  this.state={
    user:{}
  };
  this.handelLogin = this.handelLogin.bind(this);
  }
  handelLogin (data){
    this.setState({ user: data
    })
    

  }
  
  

  render()  {

return (
    <div>
      <BrowserRouter>
      <Switch>

        <Route
      
        exact
         path='/' 
        render = {props => (
          <Dashboard {...props} />
        )}
         />
         
        <Route 
        path="/profile"
        render = {props => (
          <Profile {...props} user={this.state.user} />

        )}
         />

        <Route
         path="/Signin" 
         render = { props => (
           <Signin {...props} handelLogin = {this.handelLogin}  />
         )}
           />
         
        
      </Switch>
     
      </BrowserRouter>

    </div>

  );
        }
}

export default App;
