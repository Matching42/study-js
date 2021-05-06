card = (function () {
	const card = document.querySelectorAll("#card");

	for (let x of card)
	{
		let url = x.getAttribute("url");

		const innerHTML = x.innerHTML;
		x.innerText = null;

		const cardImg = document.createElement("img");
		if (cardImg !== undefined) {
			cardImg.className = "card-img";
			cardImg.src = url;
			x.append(cardImg);
		}

		const cardText = document.createElement("div");
		cardText.className = "card-text";
		cardText.innerHTML = innerHTML;
		x.append(cardText);
		console.log(x);
	}
}());