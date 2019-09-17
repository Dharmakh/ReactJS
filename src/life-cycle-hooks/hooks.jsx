import React, { Component, Suspense, lazy } from "react";
// import axios from 'axios';

// import AnotherComponent from "./another-component";

//lazy load component method 1
const AnotherComponent1 = lazy(() => import("./another-component"));

//lazy load component method 2
const AnotherComponent2 = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./another-component"), 300))
  });
})

//lazy load component method 3
const AnotherComponent3 = lazy(() => {
  return Promise.all([
    import("./another-component"),
    new Promise(resolve => setTimeout(resolve, 300))
  ])
  .then(([moduleExports]) => moduleExports);
});


export default class Hooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "Click me to change me"
    };

    console.log("constructor executed");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps() executed", nextProps, prevState);

    return null;
  }

  componentDidMount = () => {
    console.log("componentDidMount() executed");
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount() executed");
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate() executed", prevProps, prevState);
    return null;
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("state value :", this.state.val);
    console.log("componentDidUpdate() executed", prevProps, prevState);
  };

  updateStateFromChild = val => {
    this.setState({
      val: val
    });
  };
  render() {
    console.log("render() executed");
    const { val } = this.state;
    return (
      <div  className="container">
        <h4>Life Cycle Hooks</h4>
        <h5 style={{marginTop:20}}>Parent Component</h5>
        <span
         style={{marginLeft:20}} onClick={e => this.setState({ val: "You changed me from parent!" })}
        >
          {val}
        </span>
        <Suspense fallback={<div>Loading...</div>}>
          <AnotherComponent3 
            val={this.state.val}
            updateStateFromChild={this.updateStateFromChild}
          />
        </Suspense>
      </div>
    );
  }
}
