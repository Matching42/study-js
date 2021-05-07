card = (function () {
	const card = document.querySelectorAll("#card");

	for (let x of card)
	{
		let url = x.getAttribute("url");

		const innerHTML = x.innerHTML;
		x.innerText = null;

		const imgWrapper = document.createElement("div");
		const cardImg = document.createElement("img");
		imgWrapper.className = "imgCutter";

		if (cardImg !== undefined) {
			cardImg.className = "card-img";
			cardImg.src = url;
			imgWrapper.append(cardImg);
			x.append(imgWrapper);
		}

		const cardText = document.createElement("div");
		cardText.className = "card-text";
		cardText.innerHTML = innerHTML;
		x.append(cardText);
		console.log(x);
	}
}());