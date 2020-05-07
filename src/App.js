import React , {Component} from 'react';
import axios from 'axios' ;
import {Route , BrowserRouter , Switch} from 'react-router-dom'
import Dashboard from './dashboard/dashboard';
import Profile from './mycomponents/profile/profile';
import Signin from './container/signin';
import Signup from './container/signup';

import './App.css';
 
 class App extends Component {
  constructor(){
    super();
  this.state={
    status : "not-logged-in" ,
    user:{}
  };
  this.handelLogin = this.handelLogin.bind(this);
  this.handelLogout = this.handelLogout.bind(this);
  }

  handelLogout(){
    this.setState({status : "not-logged-in",
                 user : {} })
  }
  todo(){
    axios.get('http://localhost:3001/compts/isLogged')
  
    .then(response => {
      if(response.data.status=== "logged-in" && this.state.status === "not-logged-in"   )
      {
             this.setState({status : "logged-in",
                 user : response.data.user[0]})
      }
      console.log(response);

      })
    .catch(function (error) {
 console.log(error);
     })
    }

 componentDidMount(){
this.todo();
 }

  handelLogin  (data){
    this.setState({ status:"logged-in" , user: data
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
          <Profile {...props} handelLogout = {this.handelLogout} user={this.state.user} />

        )}
         />

        <Route
         path="/Signin" 
         render = { props => (
           <Signin {...props} handelLogin = {this.handelLogin}  />
         )}
           />
          <Route 
          path="/Signup"
          render = { props => ( <Signup {...props} />
            )}

          />
         
        
      </Switch>
     
      </BrowserRouter>

    </div>

  );
        }
}

export default App;
