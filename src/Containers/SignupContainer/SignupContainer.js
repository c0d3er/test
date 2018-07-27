import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from "../../Components/Text/Text"
import TextInput from "../../Components/InputBox/TextInput/TextInput";
import PasswordInput from "../../Components/InputBox/PasswordInput/PasswordInput";
import Button from  "../../Components/Button/Button"
import ajax from "../../Utils/RequestAPI";
export default class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      name:"",
      password:"",
      email:"",
      retypePass:""
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(){
    ajax("http://localhost:7070/api/formsubmit").post(this.state)
  }
  onInputChange(_value,_jsonKey){
    this.setState({[_jsonKey]:_value});
  }
  render() {
    return (
      <div>
        <div>
          <Text>Username:</Text>
          <TextInput value={this.state.username} jsonKey="username" onChange={this.onInputChange}/>
        </div>
        <div>
          <Text>Name:</Text>
          <TextInput value={this.state.name} jsonKey="name" onChange={this.onInputChange}/>
        </div>
        <div>
          <Text>Email:</Text>
          <TextInput value={this.state.email} jsonKey="email" onChange={this.onInputChange}/>
        </div>
        <div>
          <Text>Password:</Text>
          <PasswordInput value={this.state.password} jsonKey="password" onChange={this.onInputChange}/>
        </div>
        <div>
          <Text>Retype Password:</Text>
          <PasswordInput value={this.state.retypePass} jsonKey="retypePass" onChange={this.onInputChange}/>
        </div>
        <span>
          <Button name="Submit" onClick={this.onSubmit}></Button>
          <Button name="Reset"></Button>
        </span>
      </div>
      );
  }
}
SignupContainer.propTypes = {
};
