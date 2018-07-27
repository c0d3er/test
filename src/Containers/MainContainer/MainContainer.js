import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupContainer from '../SignupContainer/SignupContainer'
export default class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SignupContainer/>
      </div>
      );
  }
}
MainContainer.propTypes = {
};
