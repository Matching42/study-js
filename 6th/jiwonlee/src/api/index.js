const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    try {
      const result = await fetch(
        `${API_ENDPOINT}/api/cats/search?q=${keyword}`
      );
      return result.json();
    } catch (e) {
      console.warn(e);
    }
  },

  getCatInfo: async (id) => {
    try {
      const result = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
      return result.json();
    } catch (e) {
      console.warn(e);
    }
  },
};

export { api };
