export default class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <button class="close">x</button>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;
      setTimeout(() => (this.$imageInfo.style.opacity = "1"), 300);
      this.$imageInfo.style.display = "block";

      const $closeBtn = document.querySelector(".close");
      $closeBtn.addEventListener("click", () => {
        this.$imageInfo.style.opacity = "0";
        setTimeout(() => (this.$imageInfo.style.display = "none"), 300);
      });
    } else {
      this.$imageInfo.style.opacity = "0";
      setTimeout(() => (this.$imageInfo.style.display = "none"), 300);
    }
  }
}
