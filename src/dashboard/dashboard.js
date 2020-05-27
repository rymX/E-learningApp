import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Dashboard extends Component {
    state = {  }
    render() { 
      return (
        <div className="bg-default">
              <div className="main-content">
    {/* Navbar */}
    <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
      <div className="container px-4">
        <a className="navbar-brand" href="../index.html">
          <h4 className="text-white" >App Logo</h4>
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
                  <img src="../assets/img/brand/blue.png" alt="logo" />
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
              <div className="nav-link nav-link-icon" >
                <i className="ni ni-planet" />
                <span className="nav-link-inner--text">
                  <Link className="link" to="">
                  Accueil
                  </Link>
                  </span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link nav-link-icon">
                <i className="ni ni-circle-08" />
                <span className="nav-link-inner--text">
                  <Link className="link"  to="/Signup">
                  Register
                  </Link>
                  </span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link nav-link-icon">
                <i className="ni ni-key-25" />
                <span className="nav-link-inner--text">
                  <Link className="link" to="/Signin">
                  Login
                  </Link>
                  </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Header */}
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
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card bg-secondary shadow border-0">
            <div className="card-body px-lg-5 py-lg-5">
              
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
  {/*   Core   */}
  {/*   Optional JS   */}
  {/*   Argon JS   */}

        </div>
      );

       
    }
}
 
export default Dashboard;