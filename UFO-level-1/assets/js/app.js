// from data.js
var tableData = data;

var table = d3.select('table')


var tableBody = d3.select('tbody')


tableData.forEach((info) => {

	var row = tableBody.append('tr');

	Object.entries(info).forEach(([key, value]) => {
		row.append('td').text(value);
	});
});


// YOUR CODE HERE!
// testing, see pages for logic



var sampleData = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
  {
    datetime: "1/1/2010",
    city: "bonita",
    state: "ca",
    country: "us",
    shape: "light",
    durationMinutes: "13 minutes",
    comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
  }]

sampleData.forEach((info) => {

	var row = tableBody.append('tr');

	Object.entries(info).forEach(([key, value]) => {
		row.append('td').text(value);
	});
});


var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

  
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
	d3.event.preventDefault();

	console.log('hi world')
  
}


