export default class Test {
  constructor({ $target }) {
    this.section = document.createElement("div");
    this.section.className = "test-board";
    $target.appendChild(this.section);

    this.render();
  }

  render() {
    const dragSection = document.createElement("div");
    dragSection.className = "test-section";
    this.section.appendChild(dragSection);
  }
}
