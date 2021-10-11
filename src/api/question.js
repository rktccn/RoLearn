import axios from "axios";

export function searchApiOne(value) {
  return axios.get("http://api.902000.xyz:88/wkapi.php", {
    params: {
      q: value,
    },
  });
}

export function searchApiTwo(value) {
  return axios.get("https://api.gochati.cn/jsapi.php", {
    params: {
      q: value,
      token: "cxmooc",
    },
  });
}

export function searchApiThree(value) {
  return axios.get("https://q.zhizhuoshuma.cn/", {
    params: {
      question: value,
    },
  });
}
