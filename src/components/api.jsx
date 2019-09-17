import React from "react";
import jsonData from "./../assets/table.json";
import * as _DataSer from "./../_services/_data-service";

class APIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      jsonItems: jsonData.employees
    };
  }

  componentDidMount() {
    //https://reqres.in/api/users get user data dummy api
    let url = "http://jsonplaceholder.typicode.com/todos";
    _DataSer.get(url, {}).then(res => {
      console.log("res data: ", res);
      this.setState({
        isLoaded: true,
        items: res
      });
    });
  }

  render() {
    const { error, isLoaded, items, jsonItems } = this.state;
    let apiData;
    if (error) {
      apiData = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      apiData = <div>Loading...</div>;
    } else {
      apiData = (
        <div>
          <ul>
            {items
              /*  .filter(x => {
                return x.id < 20;
              }) */
              .splice(items.length - 10, 10)
              //.slice(items.length-10,items.length)
              .reverse()
              .map(item => (
                <li key={item.id}>
                  {item.id} {item.title}
                </li>
              ))}
          </ul>
        </div>
      );
    }
    return (
      <div  className="container">
        <div>
          <h3>Json Data</h3>
          <ul>
            {jsonItems.map(item => (
              <li key={item.StatusCode}>
                {item.StatusCode} -- {item.StatusDesc}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>API Data (We use filter, map, splice,slice)</h3>
          {apiData}
        </div>
      </div>
    );
  }
}

export default APIComponent;
