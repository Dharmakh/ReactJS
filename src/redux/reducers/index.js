import { combineReducers } from 'redux';
 // Imported employee reducer
 import employeeReducer from './employee-Reducer';
 
 const rootReducer = combineReducers({
 employee: employeeReducer,
 });
 
 export default rootReducer;