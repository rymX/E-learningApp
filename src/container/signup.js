import React , {Component} from 'react';
import axios from 'axios'; 

class Signup extends Component {
    state = {  }
    handelSuccess =()=>{
      this.props.history.push('/')
    }
    handelvalue = event =>{
        event.preventDefault();
        const name =event.target.elements.name.value;
       const lastname =event.target.elements.lastname.value;

       const email =event.target.elements.email.value;
       const password =event.target.elements.password.value;

        axios.post('http://localhost:3001/compts', {
        name: name,
        lastname:lastname,
        email: email,
        password:password,
       
    })
    .then( response=> {
      if (response.data.length !== 0)
      { this.handelSuccess()
        
} 
     console.log(response);
     
     //this.handelSuccess();

  
    })
    .catch(function (error) {
      console.log(error);
    });
    
    console.log(name , lastname , email , password)

    }
    render() { 
        return ( 
            <div class="bg-default">
                <div class="main-content">

                <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
        <div className="container px-4">
          <a className="navbar-brand" href="../index.html">
            <img src="../assets/img/brand/white.png" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar-collapse-main">
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="../index.html">
                    <img src="../assets/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
            {/* Navbar items */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="../index.html">
                  <i className="ni ni-planet" />
                  <span className="nav-link-inner--text">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="../examples/register.html">
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">Register</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="../examples/login.html">
                  <i className="ni ni-key-25" />
                  <span className="nav-link-inner--text">Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="../examples/profile.html">
                  <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">Use these awesome forms to login or create new account in your project for free.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon className="fill-default" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <div className="container mt--8 pb-5">
          {/* Table */}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card bg-secondary shadow border-0">
                <div className="card-header bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>
                  <div className="text-center">
                    <a href="#" className="btn btn-neutral btn-icon mr-4">
                      <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg" /></span>
                      <span className="btn-inner--text">Github</span>
                    </a>
                    <a href="#" className="btn btn-neutral btn-icon">
                      <span className="btn-inner--icon"><img src="../assets/img/icons/common/google.svg" /></span>
                      <span className="btn-inner--text">Google</span>
                    </a>
                  </div>
                </div>
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign up with credentials</small>
                  </div>

             {/* forme */}

                  <form  onSubmit={this.handelvalue}>
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-hat-3" /></span>
                        </div>
                        <input name="name" className="form-control" placeholder="Name" type="text" />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-hat-3" /></span>
                        </div>
                        <input name="lastname" className="form-control" placeholder="Lastname" type="text" />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83" /></span>
                        </div>
                        <input name="email" className="form-control" placeholder="Email" type="email" />
                      </div>
                    </div>


                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                        </div>
                        <input name="password" className="form-control" placeholder="Password" type="password" />
                      </div>
                    </div>


                    <div className="text-muted font-italic"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div>
                    <div className="row my-4">
                      <div className="col-12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
                          <label className="custom-control-label" htmlFor="customCheckRegister">
                            <span className="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary mt-4">Create account</button>
                    </div>

                  </form>

                     {/** end of form */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6">
              <div className="copyright text-center text-xl-left text-muted">
                © 2018 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
              </div>
            </div>
            <div className="col-xl-6">
              <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


             </div>
  </div>
        );
    }
}
 
export default Signup;