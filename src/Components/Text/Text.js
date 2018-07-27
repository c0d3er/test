import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Text extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<span>{this.props.children}</span>);
  }
}
Text.propTypes = {
  children:PropTypes.any
};
