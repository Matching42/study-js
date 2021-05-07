button = (function () {
	const button = document.querySelectorAll(".custom-btn");

	console.log(button);

	for (let x of button) {
		const shapeCase = x.getAttribute("shape");
		switch (shapeCase) {
			case "circle":
				x.style["border-radius"] = "50%";
				x.style["border"] = "none";
				break ;
			case "round":
				x.style["border-radius"] = `${x.offsetHeight}px`;
				x.style["border"] = "none";
				break ;
			// case "triangle": 삼각형 너무 못생겨서 폐기
			// 	x.style["border-top"] = `${x.offsetHeight}px solid none`;
			// 	x.style["border-bottom"] = `${x.offsetHeight}px solid red`;
			// 	x.style["border-right"] = `${x.offsetHeight * 0.7}px solid transparent`;
			// 	x.style["border-left"] = `${x.offsetHeight * 0.7}px solid transparent`;
			// 	break ;
			default:
				break ;
		}
	}
}());