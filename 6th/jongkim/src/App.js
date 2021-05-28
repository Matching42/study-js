import ImageInfo from "./components/ImageInfo.js";
import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import RandomButton from "./components/RandomButton.js";
import { api } from "./api/index.js";
import { createElem } from "./utils/utils.js";

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        if (keyword) api.fetchCats(keyword)
				.then(({ data }) => {
					if (data && data.length === 0) return this.notFound(); // jongkim 추가
					this.setState(data);
				})
				.catch((rej) => console.error(rej));
      },
    });

		this.randomButton = new RandomButton({
			$target,
			onSearch: () => {
				api.randomCats()
				.then(({ data }) => this.setState(data))
				.catch((rej) => console.log(rej));
			}
		});

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

	notFound() {
		console.log('검색 결과가 없습니다.');
		this.searchResult.setState([]);
		const _elem = createElem(this.searchResult.$searchResult, 'notFound');
		_elem.innerHTML = `
			<div>
				검색 결과가 없습니다.
			</div>
		`;
	}
}
