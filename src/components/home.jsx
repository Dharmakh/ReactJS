import React from "react";
import * as _DataSer from "./../_services/_data-service";

class Home extends React.Component {
  constructor(props) {
    super(props);
    //this.dataService = new DataService();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      jsonItems: null
    };
  }
  componentDidMount() {   
    let url = "https://reqres.in/api/users";
    let params = {
      spid: 1,
      name: "rahul"
    };
    _DataSer.get(url, params).then(res => {
      console.log("res data: ", res);
      this.setState({
        isLoaded: true,
        items: res.data
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
      apiData = 
        <div >
          <ul>
            {items.length > 0 && items
              /*  .filter(x => {
                  return x.id < 20;
                }) */
              //.splice(items.length - 10, 10)
              //.slice(items.length-10,items.length)
              //.reverse()
              .map(item => (
                <li key={item.id}>
                  <img src={item.avatar} alt="new" style={{ marginTop: 10 }} />
                  <span style={{ marginLeft: 10 }}>
                    {item.id}. {item.first_name} {item.last_name} {item.email}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      
    }
    return (
      <div className="container"> 
        <div>
          <h3>Home</h3>
        </div>
        <div>
          <h5>API Data (We use filter, map, splice,slice, Interceptor)</h5>
          {apiData}
        </div>
      </div>
    );
  }
}
export default Home;
