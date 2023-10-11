const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

/*
This function will return a list called results. 
This function will filter the fruit list based on whatever user input is in the search box. 
If the string in the user input appears ANYWHERE in the fruit name, it should be added to results list. 
It also should not matter if a user types upper or lower case letters.
*/
function search(str) {
	let results = [];
	if(str != '')
	{
		results = fruit.filter(n => n.toLowerCase().includes(str.toLowerCase()));
	}
	return results;
}

function searchHandler(e) 
{
	//Get Input
	let fruitInput = input.value;
	console.log(fruitInput);

	//Search Results

	let matchedFruit = search(fruitInput);

	//Sort Results by Length and Alphabet

	let sortedFruit = matchedFruit.sort((a,b) => {
		if(a.length != b.length)
		{
			return a.length > b.length;
		} else
		{
			return a > b;
		}
	});
	console.log(sortedFruit);
	
	//Show Suggestions

	showSuggestions(sortedFruit,fruitInput);

	

}

function showSuggestions(results, inputVal) {

	// Add a LI Element to the suggestions 

	suggestions.innerHTML = '';

	results.forEach(n => {

		let suggElmt = document.createElement("li");
		
		suggElmt.innerText = n;

		suggestions.appendChild(suggElmt);

	});





}



/*
When a user clicks on a suggestion, that string should fill the Search Bar. 
Add an event listener which triggers when a user clicks. Write a function useSuggestion() to 
populate the Search Bar with the suggestion. Add this function to the event listener.
*/
function useSuggestion(e) {
	// TODO
}

/*
TODO
Add an event listener to trigger whenever a user hovers over one of the suggestions in the drop down list. 
Write a function which highlights the suggestion. Attach this function to the event listener.
---------
*/



input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);