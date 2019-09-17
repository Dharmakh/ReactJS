import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE
} from "../actiontypes/actiontypes";
import axios from "axios";

export const getEmployees = () => {
  return dispatch => {
    return axios.get("http://localhost:3000/employees").then(response => {
      dispatch({ type: GET_EMPLOYEES, payload: response.data });
    });
  };
};
