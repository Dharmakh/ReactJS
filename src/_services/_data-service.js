export const get = (apiurl, params) => {
	//const URL = `YOUR_URL`;
	let bearer = "" + "rahul";
	let defaultOptions = {
		method: "GET",
		withCredentials: true,
		//credentials: "include",
		headers: {
			Authorization: bearer,
			"X-FP-API-KEY": "iphone", //it can be iPhone or your any other attribute
			"Content-Type": "application/json"
		}
	};
	//let url = new URL("https://reqres.in/api/users");
	let url = new URL(apiurl);
	//Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));  //this is owrking only chrome browser
	let query = Object.keys(params)
		.map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
		.join("&");

	return fetch(url + "?" + query, {
		...defaultOptions
	}).then(res => res.json());
};

export const post = (apiurl, params) => {
	//const URL = `YOUR_URL`;
	let bearer = "" + "rahul";
	let defaultOptions = {
		method: "GET",
		withCredentials: true,
		//credentials: "include",
		headers: {
			Authorization: bearer,
			"X-FP-API-KEY": "iphone", //it can be iPhone or your any other attribute
			"Content-Type": "application/json"
		}
	};
	//let url = new URL("https://reqres.in/api/users");
	let url = new URL(apiurl);
	Object.keys(params).forEach(key =>
		url.searchParams.append(key, params[key])
	);

	return fetch(url, {
		...defaultOptions
	}).then(res => res.json());
};
