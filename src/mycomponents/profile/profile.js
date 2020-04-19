import React,{Component} from 'react';
import './profile.css'
class Profile extends Component {
    state = {  }
    render() { 
        return (  
          <div className="profilepage">
                
      <div className="main-content">

          {/* Navbar */}
      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          {/* Brand */}
          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">User Profile</a>
          {/* Form */}
          <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div className="form-group mb-0">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-search" /></span>
                </div>
                <input className="form-control" placeholder="Search" type="text" />
              </div>
            </div>
          </form>
          {/* User */}
          <ul className="navbar-nav align-items-center d-none d-md-flex">
            <li className="nav-item dropdown">
              <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="../assets/img/theme/team-4-800x800.jpg" />
                  </span>
                  <div className="media-body ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="../examples/profile.html" className="dropdown-item">
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </a>
                <a href="../examples/profile.html" className="dropdown-item">
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </a>
                <a href="../examples/profile.html" className="dropdown-item">
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </a>
                <a href="../examples/profile.html" className="dropdown-item">
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
      
       {/* Header */}
       <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: '600px', backgroundImage: 'url(../assets/img/theme/profile-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top'}}>
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white">Hello Jesse</h1>
              <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
              <a href="#!" className="btn btn-info">Edit profile</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt--7">

      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                <a href="#" className="btn btn-sm btn-default float-right">Message</a>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">Friends</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">Photos</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Jessica Jones<span className="font-weight-light">, 27</span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2" />Bucharest, Romania
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2" />Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i className="ni education_hat mr-2" />University of Computer Science
                </div>
                <hr className="my-4" />
                <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                <a href="#">Show more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">***********</h3>
                </div>
                <div className="col-4 text-right">
                  <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">Expériences</h6>
                {/** timeliner */}
                 
                <div className="timeline timeline-one">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <span className="icon text-info icon-lg"><i className="fab fa-react"/></span>
          <h4 className="my-3">Title</h4>
          <h5>company</h5>
          <span>JUN 17<sup>th</sup> ,2019</span> <span>- JUN 17<sup>th</sup> ,2020</span>
          <p/>
          <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.</p>
        </div>
        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <span className="icon text-info icon-lg"><i className="fab fa-react" /></span>
          <h5 className="my-3">VueJs</h5>
          <p>Bootstrap. Build responsive, mobile-first projects on the web with the world's most popular front-end component library. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your
            ideas.
          </p>
        </div>
        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <span className="icon text-danger"><i className="fab fa-angular" /></span>
          <h5 className="my-3">Angular</h5>
          <p>AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing
            single-page applications.</p>
        </div>
      </div>
     
                


                {/** end timeliner */}
                
                 <hr className="my-4" />
                {/* Address */}
                <h6 className="heading-small text-muted mb-4">Contact information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-address">Address</label>
                        <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-city">City</label>
                        <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" defaultValue="New York" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-country">Country</label>
                        <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" defaultValue="United States" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                {/* Description */}
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group">
                    <label>About Me</label>
                    <textarea rows={4} className="form-control form-control-alternative" placeholder="A few words about you ..." defaultValue={"A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
 {/* Footer */}
 <footer className="footer">
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
      </footer>

          </div>

          </div>
    
            </div>
        );
    }
}
 
export default Profile;