import React, { Component } from "react";
import ReversedName from "./reverseHoc";

export default class HocComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /* const reverse = PassedComponent => ({ children, ...props }) => (
      <PassedComponent {...props}>
        {children
          .split("")
          .reverse()
          .join("")}
      </PassedComponent>
    );

    const name = props => <span>{props.children}</span>;
    const reversedName = reverse(name); */

    return (
      <div className="container">
          <h2>HOC (Higher Order Component) - Reverse String</h2>
        <ReversedName>This Is Higher Order Component</ReversedName>
      </div>
    );
  }
}
