import { api } from "../api/index.js";


export default class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  };
  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        (cat) => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        api.fetchCatone(this.data[index].id).then(({ data }) => this.onClick(data));
      });
    });
  }
}
