import React , {Component} from 'react'
import {Button , Modal , Form, Input, DatePicker , Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import pic1 from "./team-1-800x800.jpg"


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
 
class EditProfile extends Component {
  constructor(props){
    super(props);

    this.state = { visible: false ,
      picture:"" , loading: false,imageUrl:{pic1}
    }
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {

      // Get this url from response in real world.
      
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
          picture : info.file.originFileObj
        }),
      );
    }
  };
/*
    handleSelectimage = event =>{
     
       const file = event.target.files[0];
  this.setState({picture : file});
       
    }
    */

    showModal = () => {
        this.setState({
          visible: true,
        });
      };

      handleOk = e => {
                

        const fd = new FormData();
        fd.append('avatar',this.state.picture);
        fd.append('user', this.props.userid);
        axios.patch('http://localhost:3001/compts/profilepicture', fd )
        // axios.post('http://localhost:3001/compts/profilepicture', fd )

        .then(responce =>{ 
         console.log(responce)
          const picture = "http://localhost:3001/"+responce.data.url ;
         this.props.handleUserpic(picture);
        // this.setState({url:picture})
        })
        .catch (err=> {
          console.log(err);
        })
        
        this.setState({
          visible: false,
        })


        

        ;
      };

      handleCancel = e => {

        this.setState({
          visible: false,
        });
      };

    render() {
      const uploadButton = (
        <div>
          {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div className="ant-upload-text">Upload</div>
        </div>
      );
  
      const { imageUrl } = this.state;
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
             

             <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>






</Modal>
          </div>
         );
    }
}

export default EditProfile;
