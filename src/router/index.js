import Vue from "vue";
import VueRouter from "vue-router";
import search from "../components/search.vue";
import book from "../components/book.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "search",
    component: search,
  },
  {
    path: "/book",
    name: "book",
    component: book,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
