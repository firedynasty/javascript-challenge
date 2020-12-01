# javascript-challenge

In this homework challenge, it was required to populate a table from a javascript Object. 

The code looked like this 


```javascript
var data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
...
in a repeating fashion (114 of them)
```

In the first folder, *UFO-level-1*, it contains the index.html file that can be loaded to view the example.  This code was completed using d3.  In */assets/js/app.js* there you will find the code that powers the selection and filtering.  The elements of the table in the index.html were selected and then populated using a for loop in the forEach format. 

```javascript
tableData.forEach((info) => {

	var row = tableBody.append('tr');

	Object.entries(info).forEach(([key, value]) => {
		row.append('td').text(value);
	});
});
```

Then an eventlistener was used:
```javascript

  
button.on("click", runEnter);
form.on("submit", runEnter);

```
Whenever the form is submitted with a date, then the eventlistener will run the function runEnter, which will filter the Javascript object depending on what was submitted in the input. 

```javascript 
// the filter function 

	function selectDate(date) {
		return  date.datetime === inputValue;
	  }
  
	var selectedDate = data.filter(selectDate);
```

After the Javascript is filtered it is stored in the variable `selectedDate`, which will get populated with the function was was used above to populate the table.  Before repopulating the table, the table is cleared using d3 `.remove()`

# Bonus

For the bonus, the same method was used as above, but it was expanded to include one more variable.  The bonus can be found in the folder *UFO-level-2* .

Radio buttons were required to be added and it looks like this :
```html

<div class="radio">
	<label><input type="radio" name="optradio" value="set1" checked> By Date</label>
	<label><input type="radio" name="optradio" value="set2"> By State</label>
	<label><input type="radio" name="optradio" value="set3"> By Country</label>
	<label><input type="radio" name="optradio" value="set4"> By Shape</label>
</div>
```
Depending on which radio button is selected it will return the input that was entered.  The code for this is to set the variable `tableData` to the variable that was set from the filtered results.  In this way further searches can use the variable `tableData` to filter results.  When the page first loaded `tableData` was declared to be equal to the variable that holds all the information `var data.`

Additionally, the bonus page can be accessed at: a