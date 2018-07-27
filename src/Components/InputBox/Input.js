import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:""
    }
    this.onChange=this.onChange.bind(this)
  }
  componentWillReceiveProps(nextProps){
    let {value} = nextProps
    if(value!=this.props.value){
      this.setState({value:value})
    }
  }
  onChange(event){
    let {value}=event.target
    this.setState({value})
  }
}
