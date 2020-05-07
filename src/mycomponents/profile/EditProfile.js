import React , {Component} from 'react'
import {Button , Modal , Form, Input, DatePicker } from 'antd'
import axios from 'axios';

class EditProfile extends Component {
  constructor(props){
    super(props);

    this.state = { visible: false };
  }


    handleSelectimage = event =>{
      const fd = new FormData();
       const avatar = event.target.files[0];
       console.log(avatar);
     fd.append('avatar', avatar)
        axios.post('http://localhost:3001/compts/profilepicture', fd)
         .then(responce =>{
           console.log(responce)
        //  this.props.handleUserpic(responce);
         })
         .catch (err=> {
           console.log(err);
         })

    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };

      handleOk = e => {

        this.setState({
          visible: false,
        });
      };

      handleCancel = e => {

        this.setState({
          visible: false,
        });
      };

    render() {
        return (
            <div>
            <Button type="primary" onClick={this.showModal}>
              Edit Profile
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <input name='avatar' type="file" onChange={this.handleSelectimage} />

            </Modal>
          </div>
         );
    }
}

export default EditProfile;
