import { api } from "../api/index.js";

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
      const CatId = this.data.image.id
      console.log(CatId)
      const { name, url, temperament, origin } = this.data.image;
      const A = api.fetchCatone(CatId)
          .then(( data ) => {
            return data}
            )
            .then((data) => {
              return data
            })
          .catch((err) => console.log("err \n",err));
      // console.log(typeof api_id.fetchCatone)
      console.log("A\n",A)
      this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
