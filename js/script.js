const fetchBooksAPI = async () => {
	let response = await fetch("https://striveschool-api.herokuapp.com/books");
	let responseJSON = await response.json();

	console.log(responseJSON);
};

window.onload = () => {
	fetchBooksAPI();
};
