import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
//import App from './App';
import * as serviceWorker from "./serviceWorker";
import createRoutes from "./routes";
import Navbar from "./components/nav-bar";
import regInterceptor from "./fetch-interceptor";
import ErrorBoundary from "./_services/error-handler";
import { Card, Button, CardTitle, CardText, Row, Col, Table } from "reactstrap";

//used for Redux
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/index";

//direct add this code to this file or add this file to a separate file.
/* import fetchIntercept from 'fetch-intercept';
fetchIntercept.register({
    request: function (url, config) {
        console.log("from request",url);
        return [url, config];
    },

    requestError: function (error) {
        console.log(error);
        return Promise.reject(error);
    },

    response: function (response) {
				console.log("from response",response);
				return response;
    },

    responseError: function (error) {
        console.log(error);
        return Promise.reject(error);
    }
});
 */

  // To apply middleware to the store
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const reg = regInterceptor();
const routes = createRoutes();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(rootReducer)}>
     {/*  <div className="container">
        <div className="col-md-12"> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <ErrorBoundary >{routes}</ErrorBoundary>
          </Suspense>
        {/* </div>
      </div> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
