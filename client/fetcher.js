import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

// get: axios.get(url,[ config])
// delete: axios.delete(url,[ config])
// post: axios.post(url, data, [ config])
// put: axios.put(url, data, [ config])

// 위와 fetcher 함수는 get, delete, post, put에 대한 모든 통신들중 중복되는 부분에 의해
// 재사용할 수 있게 method, url, rest값을 인수로 받아오는 함수이다.
// ...rest는    data, config 둘다 또는 하나만 들어오는 것에 대응하여 유연하게 받기 위해서.
