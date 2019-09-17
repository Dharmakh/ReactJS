import fetchIntercept from "fetch-intercept";

const regInterceptor = () =>
  fetchIntercept.register({
    request: function(url, config) {
      // Modify the url or config here
      //   console.log("request executed");
      //   console.log(config);

      if (config) {
        config.headers.Authorization = "dk";
      }
      return [url, config];
    },

    requestError: function(error) {
      // Called when an error occured during another 'request' interceptor call
      //   console.log("requestError executed");
      return Promise.reject(error);
    },

    response: function(response) {
      // Modify the reponse object
      //   console.log("response executed");
      return response;
    },

    responseError: function(error) {
      // Handle an fetch error
      //   console.log("responseError executed");
      return Promise.reject(error);
    }
  });

export default regInterceptor;
