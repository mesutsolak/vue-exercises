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
      profilImage: "profile-mesut.jpg", // Yol değişebilir canlı ve prod ortamda bu yüzden sadece isim tutulmalıdır.
    },
  },
  getters: {
    /*
      Var olan state (veri) özelleştirerek tekrardan veri şeklinde kullanmamıza yaramaktadır.
      State parametresi sayesinde vuex içinde tanımlı olan değerlere erişebiliriz.
    */
    firstAndLastName: (state) =>
      state.activeUser.firstName + " " + state.activeUser.lastName,
    ispopular: (state) => state.activeUser.likeNumber > 20,
  },
  mutations: {
    userSetting(state) {
      state.activeUser = {
        firstName: "Mesut",
        lastName: "Solak",
        Title: "Yazılım Geliştirme Uzmanı",
        likeNumber: 25,
        profilImage: "profile-mesut.jpg",
      };
    },
    increaseLikes(state, n) {
      /*
      n kadar arttır diyerek istediğimiz sayı kadar arttırabiliriz.
      n değerine payload diyoruz.
      */
      state.activeUser.likeNumber += n;
    },
    decreaseLikes(state, payload) {
      state.activeUser.likeNumber += payload.value;
    },
  },
  actions: {},
});
