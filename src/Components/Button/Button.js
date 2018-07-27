import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.name}</button>
      );
  }
}
Button.propTypes = {
  name:PropTypes.string,
  onClick:PropTypes.func
};
