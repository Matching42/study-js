const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    return await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
		.then((res) =>{
			console.log(res);
			return res.json();
		})
		.catch((rej) => console.error(rej));
  },

	randomCats: async () => {
		return await fetch(`${API_ENDPOINT}/api/cats/random50`)
		.then((res) =>{
			console.log(res);
			return res.json();
		})
		.catch((rej) => console.error(rej));
	}
};

export { api };
