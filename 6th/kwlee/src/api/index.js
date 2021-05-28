const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
    .then((res) =>
      res.json())
    .catch(err =>
      console.log(err));
  },
  fetchCatone: (cat_id) => {
    return fetch(`${API_ENDPOINT}/api/cats/${cat_id}`)
    .then((res) =>
      res.body)
    .catch(err =>
      console.log(err));
  }
};

export { api };
