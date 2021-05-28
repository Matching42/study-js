export default class RandomButton {
  constructor({ $target, onSearch }) {
    const $randomButton = document.createElement("button");

    $randomButton.className = "RandomButton";
    $target.appendChild($randomButton);

    $randomButton.addEventListener("click", (e) => {
      onSearch();
    });

    console.log("RandomButton created.", this);
  }
  render() {}
}
