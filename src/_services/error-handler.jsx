import React, { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true
    };
  }
  render() {
    /* if (this.state.hasError) {
      return <h2>Some Error Spotted here!</h2>;
    } */
    return this.props.children
  }
}
export default ErrorBoundary;
