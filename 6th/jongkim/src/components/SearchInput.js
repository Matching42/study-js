const TEMPLATE = '<input type="text">';

export default class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
				$searchInput.value = null; // jongkim 추가
      }
    });

		$searchInput.addEventListener("click", (e) => {
      if (e.target.value.length !== 0) {
				e.target.value = null;
			}
    });

		$searchInput.focus();
    console.log("SearchInput created.", this);
  }
  render() {}
}
