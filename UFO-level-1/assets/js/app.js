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

// sampleData.forEach((info) => {

// 	var row = tableBody.append('tr');

// 	Object.entries(info).forEach(([key, value]) => {
// 		row.append('td').text(value);
// 	});
// });




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