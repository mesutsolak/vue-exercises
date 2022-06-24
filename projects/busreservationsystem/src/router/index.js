import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchForm from "../components/SearchForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    alias: "/home",
    // component: SearchForm
    redirect: "seferara",
  },
  {
    path: "/seferara",
    name: "expeditionSearch",
    component: SearchForm,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
