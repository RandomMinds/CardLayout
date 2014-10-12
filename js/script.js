/*Data to populate the cards*/
var cards = [
	{
		heading: "Great wall of China",
		body: {
			content: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China in part to protect the Chinese Empire or its prototypical states against intrusions by various nomadic groups or military incursions by various warlike peoples or forces. Several walls were being built as early as the 7th century BC;[3] these, later joined together and made bigger and stronger, are now collectively referred to as the Great Wall.[4] Especially famous is the wall built between 220–206 BC by the first Emperor of China, Qin Shi Huang. Little of that wall remains. Since then, the Great Wall has on and off been rebuilt, maintained, and enhanced; the majority of the existing wall is from the Ming Dynasty.",
			featuredImage: "img/The_Great_Wall_of_China.jpg"
		}
	},
	{
		heading: "The Taj Mahal",
		body: {
			content: "The Taj Mahal \"crown of palaces\", also \"the Taj\"[5]) is a white marble mausoleum located in Agra, Uttar Pradesh, India. It was built by Mughal emperor Shah Jahan in memory of his third wife, Mumtaz Mahal. The Taj Mahal is widely recognized as \"the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage\"",
			featuredImage: "img/Taj_Mahal.jpg"
		}
	},
	{
		heading: "Great Pyramid of Giza",
		body: {
			content: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza Necropolis bordering what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.",
			featuredImage: "img/Pyramid.jpg"
		}
	},
	{
		heading: "This is just a plain card",
		body: {
			content: "Content of the card"
		}
	},
	{
		heading: "Great! We have another card",
		body: {
			content: "Lorem ipsum dolor sit amet, vix id lobortis accommodare. Malorum debitis posidonium mei in. Vix vocent theophrastus ut, quem explicari sea in. Vis odio laoreet conceptam eu, usu voluptua explicari ex. Quis placerat facilisis at pro. Eam id veritus scaevola laboramus, mel an sint utinam tamquam. Malorum docendi conceptam ut ius, nec legere mollis scripserit in.",
			featuredImage: "img/lorem_ipsum.jpg"
		}
	},
	{
		heading: "Dynamic Content",
		body: {
			content: "Lorem ipsum dolor sit amet, vix id lobortis accommodare. Malorum debitis posidonium mei in. Vix vocent theophrastus ut, quem explicari sea in. Vis odio laoreet conceptam eu, usu voluptua explicari ex. Quis placerat facilisis at pro. Eam id veritus scaevola laboramus, mel an sint utinam tamquam. Malorum docendi conceptam ut ius, nec legere mollis scripserit in."
		}
	}
];

var template = document.getElementById("cardTemplate").innerHTML; /*Get the mustache template*/
var container = document.getElementById("container"); /*Fetch the container*/
var columns = []; /*This will hold all the columns dynamically*/
var CARD_WIDTH = 350; /*Card width determines the number of columns*/
var NUM_COLUMNS;

/*This function calculates the columns dynamically and renders the cards inside of it*/
function createLayout(){ 
	resetContent(); /*Delete any existing content within the container*/

	var pageWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	NUM_COLUMNS = Math.floor(pageWidth / CARD_WIDTH);

	/*Create the column elements on the page*/
	for(var i=0; i < NUM_COLUMNS; i++) {
		var column = document.createElement("div");
		column.className = 'column';
		column.style.width = Math.floor(100/NUM_COLUMNS) + '%';
		columns.push(column); 
		container.appendChild(column);
	}

	/*Associate each card to a column*/
	for(var i=0; i < cards.length; i++) {
		var card = document.createElement("div");
		card.className = "card";
		card.innerHTML = Mustache.render(template, cards[i]); /*Render the Mustache template using the card data*/
		columns[(i % NUM_COLUMNS)].appendChild(card);
	}
}

function resetContent() {
	columns.length = 0; /*Reset the column array*/
	/*Remove all the elements within container*/
	while(container.lastChild) {
		container.removeChild(container.lastChild);
	}
}

window.onresize = createLayout; /*Redraw the layout once the window is refreshed*/

createLayout();