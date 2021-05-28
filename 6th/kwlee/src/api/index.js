const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    return await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
    .then((res) =>
      res.json())
    .catch(err =>
      console.log(err));
  },
  fetchCatone: async (id) => {

    try {

    const result = await fetch(`${API_ENDPOINT}/api/cats/${id}`);

    console.log(result);

    return result.json();

    } catch (e) {

    console.warn(e);

    }
    },
};

export { api };
