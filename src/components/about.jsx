import React from "react";
import * as qs from "query-string";

class About extends React.Component {
  constructor(props) {
    super(props);
    const parsed = qs.parse(props.location.search, {
      ignoreQueryPrefix: true
    });
    this.state = {
      queryParam: parsed
    };
  }
  /*  componentDidMount () {
      const parsed = qs.parse(window.location.search);
      console.log(parsed);
      const { handle } = this.props.match.params
      console.log(handle);
   } */
  render() {
    return (
      <div className="container">
        <h1>About...</h1>
        <span>Query String</span> <br />
        <span>ID: {this.state.queryParam.id}</span> <br />
        <span>Name: {this.state.queryParam.name}</span>
      </div>
    );
  }
}
export default About;
