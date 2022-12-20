import React from 'react';
import './App.css';
import UseStateExample from './UseState'

class TestClasss extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"yogesh"
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.name) {
      return { name:props.name}
    } else {
      return { name: "default name"}
    }
  }

  render() {
    return <>
    <p>User name is :: {this.state.name}</p>
    </>
  }
}

export default TestClasss;
