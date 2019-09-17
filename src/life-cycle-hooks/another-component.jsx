import React, { Component } from "react";

export default class AnotherComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: this.props.val
    };
    console.log("child constructor executed");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "child getDerivedStateFromProps() executed",
      nextProps,
      prevState
    );

    return null;
  }
  componentDidMount = () => {
    console.log("child componentDidMount() executed");
  };
  componentWillUnmount = () => {
    console.log("child componentWillUnmount() executed");
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log(
      "child getSnapshotBeforeUpdate() executed",
      prevProps,
      prevState
    );
    return null;
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("child state value :", this.props.val);
    console.log("child componentDidUpdate() executed", prevProps, prevState);
  };

  render() {
    console.log("child render() executed");

    return (
      <div >
       <h5 style={{marginTop:20}}>Child component here</h5>
        <span style={{marginLeft:20}} onClick={e => this.props.updateStateFromChild("You changed me from child!" )}>{this.props.val}</span>
      </div>
    );
  }
}
