const boxCards = document.querySelector("#box-cards");
console.log(boxCards);

let CURRENT_PAGE = 0;
let dataJSON = [];

const fetchBooksAPI = async () => {
	let response = await fetch("https://striveschool-api.herokuapp.com/books");
	let responseJSON = await response.json();
	dataJSON.push(responseJSON);

	let pageItems = new Page(responseJSON, 10);
	pageItems.renderItems(0);
};

console.log(dataJSON);

class Page {
	constructor(items = [], pageSize = 10) {
		this.items = items;
		this.pageSize = pageSize;
	}

	renderItems(page = 0) {
		// container.innerHTML = "";

		/* 
		Mostrare 10 elementi per pagina:
		
		pagina 0: 0 - 9, (10 * 0) => (10 * 0 + 10)
		pagina 1: 10 - 19, (10 * 1) => (10 * 1 + 10)
		*/

		let arrSlice = this.items.slice(
			this.pageSize * page,
			this.pageSize * page + this.pageSize
		);
		this.showBookCards(arrSlice);
	}

	showBookCards(arrJSON) {
		boxCards.innerHTML = "";

		for (let i = 0; i < arrJSON.length; i++) {
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
	}
}

const changePage = (numOfPage) => {
	let dataOfItems = new Page(dataJSON, 10);
	dataOfItems.renderItems(numOfPage);
};

// const showBookCards = (arrJSON) => {
// 	// avevo intenzione di mostrare tutti i risultati inserendo dei bottoni di paginazione in fondo alla pagina
// 	// ma per mancanza di tempo, ho ristretto gli elementi da visualizzare a 16

// 	boxCards.innerHTML = "";

// 	let pageArrOfItems = new Page(arrJSON, 10);
// 	let arrItemsToShow = pageArrOfItems.renderItems(CURRENT_PAGE);
// 	// console.log(arrItemsToShow);

// 	for (let i = 0; i < arrItemsToShow.length; i++) {
// 		const cardElement = `<div class="card-book">
//                 <h2 class="title">
//                    <i class="fa-solid fa-prescription-bottle"></i> ${arrItemsToShow[i].title}
//                 </h2>
//                 <img src="${arrItemsToShow[i].img}" alt="image of book" class="img-url">
//                 <p class="price"><i class="fa-solid fa-money-bill-1"></i> ${arrItemsToShow[i].price} $</p>
//                 <p class="category"><i class="fa-solid fa-tags"></i> ${arrItemsToShow[i].category}</p>
//             </div>`;

// 		boxCards.innerHTML += cardElement;
// 	}
// };

window.onload = () => {
	fetchBooksAPI();
};
