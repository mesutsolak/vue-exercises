import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUser: {
      firstName: "Mesut",
      lastName: "Solak",
      likeNumber: 25,
    },
  },
  getters: {
    //Var olan state (veri) özelleştirerek tekrardan veri şeklinde kullanmamıza yaramaktadır.
    firstAndLastName: (state) =>
      state.activeUser.firstName + " " + state.activeUser.lastName,
    ispopular: (state) => state.activeUser.likeNumber > 20,
  },
  mutations: {},
  actions: {},
});
