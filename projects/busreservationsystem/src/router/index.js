import Vue from "vue";
import VueRouter from "vue-router";
import ExpeditionSearch from "../views/ExpeditionSearch.vue";
import SeatSelection from "../views/SeatSelection.vue";
import PassengerInformation from "../views/PassengerInformation.vue";
import PaymentInformation from "../views/PaymentInformation.vue";

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
    component: ExpeditionSearch,
  },
  {
    path: "/yolcubilgileri",
    name: "passengerInformation",
    component: PassengerInformation,
  },
  {
    path: "/koltuksecimi/:expeditionId?",
    name: "seatSelection",
    component: SeatSelection,
  },
  {
    path: "/odemeBilgileri",
    name: "paymentInformation",
    component: PaymentInformation,
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
