const boxCards = document.querySelector("#box-cards");
console.log(boxCards);

const fetchBooksAPI = async () => {
	let response = await fetch("https://striveschool-api.herokuapp.com/books");
	let responseJSON = await response.json();
	console.log(responseJSON);
	showBookCards(responseJSON);
};

const showBookCards = (arrJSON) => {
	// avevo intenzione di mostrare tutti i risultati inserendo dei bottini di paginazione in fondo alla pagina
	// ma per mancanza di tempo, ho ristretto gli elementi da visualizzare a 16

	for (let i = 0; i < 16; i++) {
		const cardElement = `<div class="card-book">
                <h2 class="title">
                   <i class="fa-solid fa-prescription-bottle"></i> ${arrJSON[i].title}
                </h2>
                <img src="${arrJSON[i].img}" alt="image of book" class="img-url">
                <p class="price"><i class="fa-solid fa-money-bill-1"></i> ${arrJSON[i].price} $</p>
                <p class="category"><i class="fa-solid fa-tags"></i> ${arrJSON[i].category}</p>
            </div>`;

		boxCards.innerHTML += cardElement;
	}
};

window.onload = () => {
	fetchBooksAPI();
};
