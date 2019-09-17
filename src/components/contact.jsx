import React from "react";
import ErrorBoundary from "./../_services/error-handler";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return (
      <div className="container">
        <h3>Error Handling (Form server below error not display to user)</h3>
        <ErrorBoundary>
          <h4 onClick={this.handleClick}>{this.state.counter}</h4>
        </ErrorBoundary>
      </div>
    );
  }
}
export default Contact;
