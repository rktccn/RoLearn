import Vue from "vue";
import VueRouter from "vue-router";
import search from "../components/search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "search",
    component: search,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
