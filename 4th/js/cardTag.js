const template = document.createElement("template");
template.innerHTML = `
	<style>
	.custom-card {
		font-family: 'Arial', sans-serif;
		background: #f4f4f4;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 15px;
		border-bottom: darkorchid 5px solid;
	}

	.custom-card img {
		width: 100%;
	}

	.custom-card button {
		cursor: pointer;
		background: darkorchid;
		color: #fff;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}
	</style>
	<div class="custom-card">
		<img />
		<div>
			<h3>${this}</h3>
			<div class="info">
				<p><slot /></p>
				<p>PHONE</p>
			</div>
			<button id="toggle-info">Hide info</button>
		</div>
	</div>
`;

class	Card extends HTMLElement{
	constructor() {
		super();

		this.showInfo = true;

		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
		this.shadowRoot.querySelector("img").src = this.getAttribute("avartar");
	}

	toggleInfo() {
		this.showInfo = !this.showInfo;

		const info = this.shadowRoot.querySelector(".info");
		const toggleBtn = this.shadowRoot.querySelector("#toggle-info");

		if (this.showInfo) {
			info.style.display = "block";
			toggleBtn.innerText = "Hide Info";
		} else {
			info.style.display = "none";
			toggleBtn.innerText = "Show Info";
		}
	}

	connectedCallback() {
		this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInfo());
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector("#toggle-info").removeEventListener();
	}
}

window.customElements.define('custom-card', Card);