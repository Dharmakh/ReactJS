import React, { Component } from "react";

//this is functional component
const reverse = (PassedComponent) =>
  ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.split("").reverse().join("")}
    </PassedComponent>

const name = props => <span>{props.children}</span>;
const ReversedName = reverse(name);

export default ReversedName;