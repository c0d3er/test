import React from 'react';
import PropTypes from 'prop-types';
import  Input from '../Input'
export default class PasswordInput extends Input {
  constructor(props) {
    super(props);
    this.state=Object.assign({},this.state,{value:props.value||""})
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.onChange(event);
    this.props.onChange && this.props.onChange(event.target.value,this.props.jsonKey)
  }
  render() {
    return (
      <input type="password" value={this.state.value}  onChange={this.handleChange}/>
      );
  }
}
PasswordInput.propTypes = {
  onChange:PropTypes.func,
  jsonKey:PropTypes.string
};
