import Vue from "vue";
import axios from "axios";
// 导入 Nprogress 对应的JS和CSS
import NProgress from "nprogress";

// 接口地址
// axios.defaults.withCredentials = true;
axios.defaults.timeout = 15000;

// 添加 请求头 和 进度条 NProgress.start()
axios.interceptors.request.use((config) => {
  // 添加 进度条
  NProgress.start();
  return config;
});

axios.interceptors.response.use(
  (res) => {
    // 隐藏 进度条
    NProgress.done();

    return res.data;
  },
  (error) => {
    return error.request;
  }
);

Vue.prototype.$axios = axios;
