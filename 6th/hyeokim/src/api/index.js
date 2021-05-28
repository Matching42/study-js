const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = async (keyword) => {
  try {
    const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
    if (!res.ok) {
      throw new Error('API 요청 실패');
    }
    return await res.json(
      { success: true, code : "200"}
    )
  } catch(e) {
    throw new Error(`API 요청 실패 : ${e.message}`)
  }
}

export default api;
