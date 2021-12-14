const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

// print the latitude for each launch site
// d3.json(url).then(receivedData => console.log(receivedData.map(lat => lat.location["latitude"])));

// // print the longitude for each launch site
// d3.json(url).then(receivedData => console.log(receivedData.map(lon => lon.location["longitude"])));

d3.json(url).then(receivedData => console.log(receivedData.map(loc => {
	return {latitude: loc.location['latitude'], longitude: loc.location['longitude']}
})));