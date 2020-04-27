import React,{Component} from 'react';
import Experience from'./experience.js';
import './profile.css';
import {Button , Modal , Form, Input, DatePicker} from 'antd'

const axios = require('axios').default; 


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { 
      experiences:[]
      , visible: false ,
      
     }
     this.onFinish = this.onFinish.bind(this);
  }

todo =()=>{
 const id = this.props.user._id;


   axios.get(`http://localhost:3001/profiles/owner/${id}`)   
.then(response =>{
  
 this.setState({experiences:response.data});
})
.catch( function (error){
  console.log(error);
})
}
  componentDidMount (){

   this.todo();
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
  
    this.setState({
      visible: false,
    });
 
  };
  handleCancel = ()=> {
   
    this.setState({
      visible: false,
    });
   
  };
  onFinish = values => {
    var experience = {
      title: values.title,
      company: values.company,
      startDate:values.startDate,
      endDate: values.endDate,
      description:values.description,
  }
  axios.post('http://localhost:3001/profiles',{
    title:experience.title ,
    company:experience.company,
    startDate:experience.startDate,
    endDate:experience.endDate,
    description:experience.description,
    owner : this.props.user._id
   })
   .then(response =>{
     this.todo();
   })
   .catch(function (error) {
    console.log(error);
  })
  this.setState({
    visible: false,
  });
  
  }

    render() { 
      const actualUser = this.props.user ;
      const {experiences}= this.state ;
     

        return (  
          <div className="profilepage">
                
      <div className="main-content">

          {/* Navbar */}
      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          {/* Brand */}
          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">App Logo</a>
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
                    <span className="mb-0 text-sm  font-weight-bold"> {actualUser.name}   {actualUser.lastname} </span>
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
              <h1 className="display-2 text-white">Hello {actualUser.name} </h1>
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
                {actualUser.name}   {actualUser.lastname} <span className="font-weight-light">, 27</span>
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
                
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0"> Expériences </h3>
                </div>
                <div className="col-4 text-right">
               {/** 
                <img className="icon text-info icon-sm" src="../assets/img/icons/common/pen.svg" alt="" />
               */}
                <Button className="navbar-toggler" onClick={this.showModal}>
          +
        </Button>
                </div>
              </div>
                {/** timeliner */}
                <div>
        
        <Modal
          title="Add experience"
          destroyOnClose={true}
          confirmLoading={true}
          centered
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >

<Form onFinish={this.onFinish} name="formulaire" >
  <h4>Title</h4>
      <Form.Item
        name= 'title'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <h4>Company</h4>
      <Form.Item
        name= 'company'
       
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
        
      </Form.Item>
      <h4>Start Date</h4>
      <Form.Item name="startDate"
      >
          <DatePicker />
        </Form.Item>
        <h4>End Date</h4>
        <Form.Item name="endDate"
        >
          <DatePicker />
        </Form.Item>
     
        <h4>Description</h4>
      <Form.Item name= 'description'
      >
        <Input.TextArea />
      </Form.Item>
      
      <button  onClick={this.onFinish}>submit</button>
      <button  onClick={this.handleCancel}>cancel</button>
    </Form>
        </Modal>
      </div>
                {
                  experiences.length ? <Experience exp={experiences}/> : <div>you have no exp</div>
                }  
                
               
                {/** end timeliner */}

                
                 <hr className="my-4" />
                 
                {/* skills */}
                <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Skills</h3>
                </div>
                <div className="col-4 text-right">
                <img className="icon text-info icon-sm" src="../assets/img/icons/common/pen.svg" alt="" />
                </div>
              </div>
                <div className="pl-lg-4">
                  
                <div class="table-responsive">
              
              <table class="table align-items-center table-flush">
                <tbody>
                  <tr>
                    <th scope="row">
                      skill 1
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">
                     skill 2 
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">
                     skill 3 
                    </th>
                    
                  </tr>
                  <tr>
                    <th scope="row">
                     skill 4
                    </th>
                   
                  </tr>
                  
                </tbody>
              </table>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Réalisations</h3>
                </div>
                <div className="col-4 text-right">
                <img className="icon text-info icon-sm" src="../assets/img/icons/common/pen.svg" alt="" />
                </div>
              </div>
            
                <div className="pl-lg-4">
                  <div className="form-group">
                   <p> project details </p> 
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
