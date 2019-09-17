import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, CardTitle, CardText, Row, Col, Table } from "reactstrap";
import { getEmployees } from "../redux/actions/actions";

class GetEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emps: []
    };
  }

  // To call get api of employee using actions file
  componentDidMount() {
    this.props.getEmployees();
  }

  // To render the list of employee
  render() {
    const employees = this.props.employee;
    return (
      /*   
 <CardText> */
      <div className="container">
        <Card body>
          <CardTitle>Employees Details using Redux</CardTitle>
          <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate over employee records */}
              {employees.length > 0 &&
                employees.map(post => (
                  <tr key={post.id}>
                    <td scope="row">{post.id}</td>
                    <td>{post.firstName}</td>
                    <td>{post.lastName}</td>
                    <td>{post.email}</td>
                    <td>{post.phone}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

// Mapping of state to props to use it locally in this file
const mapStateToProps = state => {
  return { employee: state.employee };
};
// Connecting this file with redux
export default connect(
  mapStateToProps,
  { getEmployees }
)(GetEmployees);
