console.log(cityGrowths)

// sort cities by population growth in descending order
var sortedCities = cityGrowths.sort((a,b) =>
    a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// select top 5 cities based on population
var topFiveCities = sortedCities.slice(0,5);

// get top 5 city names and population growths in seperate arrays
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace]
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};

Plotly.newPlot("bar-plot", data, layout);