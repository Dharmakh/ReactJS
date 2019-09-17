const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EMPLOYEES":
      return action.payload;
    default:
      return state;
  }
};
export default employeeReducer;
