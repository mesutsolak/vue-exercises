import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUser: {
      firstName: "Mesut",
      lastName: "Solak",
      Title: "Yazılım Geliştirme Uzmanı",
      likeNumber: 25,
      profilImage: "profile-mesut.jpg",
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
