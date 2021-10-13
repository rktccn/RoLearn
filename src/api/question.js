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

export function searchApiFour(value) {
  return axios({
    method: "post",
    url: "https://api.wanshiwu.asia/api/app/search",
    data: {
      question: value,
      uid: "14165",
      token: "NmI9nEg6qhIgIPVxsznHpvycWvmfUhQG",
    },
  });
}

export function searchApiFive(value) {
  return axios.get("https://huan.fm210.cn/api/answer", {
    params: {
      keyword: value,
    },
  });
}
