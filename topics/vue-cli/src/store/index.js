import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
  Store yapıları büyüdükçe yönetilmeleri zorlaşmaktadır.Bunun için store yapılarını
  parçalayıp modüller altına toplamamız hem daha düzgün hem de yönetimi daha kolay olacaktır.
  view ->  {{ $store.state.userModule.activeUser.Title }}
  kod -> return this.$store.state.userModule.activeUser.Title;
  Doküman : https://vuex.vuejs.org/guide/modules.html
*/


// let userStore = {
//   state: {
//     activeUser: {
//       firstName: "Mesut",
//       lastName: "Solak",
//       Title: "Yazılım Geliştirme Uzmanı",
//       likeNumber: 25,
//       profilImage: "profile-mesut.jpg", // Yol değişebilir canlı ve prod ortamda bu yüzden sadece isim tutulmalıdır.
//     },
//   },
//   getters: {
//     /*
//       Var olan state (veri) özelleştirerek tekrardan veri şeklinde kullanmamıza yaramaktadır.
//       State parametresi sayesinde vuex içinde tanımlı olan değerlere erişebiliriz.
//     */
//     firstAndLastName: (state) =>
//       state.activeUser.firstName + " " + state.activeUser.lastName,
//     ispopular: (state) => state.activeUser.likeNumber > 20,
//   },
//   mutations: {
//     userSetting(state) {
//       state.activeUser = {
//         firstName: "Mesut",
//         lastName: "Solak",
//         Title: "Yazılım Geliştirme Uzmanı",
//         likeNumber: 25,
//         profilImage: "profile-mesut.jpg",
//       };
//     },
//     increaseLikes(state, n) {
//       /*
//       n kadar arttır diyerek istediğimiz sayı kadar arttırabiliriz.
//       n değerine payload diyoruz.
//       */
//       state.activeUser.likeNumber += n;
//     },
//     decreaseLikes(state, payload) {
//       state.activeUser.likeNumber += payload.value;
//     },
//   },
//   actions: {
//     // Parametre olarak context değerini almaktadır.
//     UserSetting(context) {
//       context.commit("UserSetting");
//     },
//     // context içindeki commit değerine direk olarak ulaşabiliriz.State değerinide alabilmekteyiz.
//     // Commitler mutations metotları çağırmaktadır.Mutation tek işlem yapabilirken actionlar asenkron çalıştığı için birden fazla işlem yapabilmektedir.
//     increaseLikes: ({ commit }, payload) => commit("imcreaseLikes", payload),
//     decreaseLikes: ({ commit, state }) => {
//       if (state.activeUser.likeNumber > 0) commit("decreaseLikes");
//     },
//     increaseLikesAsync: ({ commit }, payload) => {
//       //resolve,reject parametrelerini almaktadır.
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           commit("imcreaseLikes", payload);
//           resolve(); // çağırma işlemi yaptıktan sonra tamamlanınca .then() içine yazdığımız kodlar çalışır.
//         }, 3000);
//       });
//     },
//   },
// };

//Modul tanımı

// export default new Vuex.Store({
//   modules :{
//     userModule : userStore
//   }
// });




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
  actions: {
    // Parametre olarak context değerini almaktadır.
    UserSetting(context) {
      context.commit("UserSetting");
    },
    // context içindeki commit değerine direk olarak ulaşabiliriz.State değerinide alabilmekteyiz.
    // Commitler mutations metotları çağırmaktadır.Mutation tek işlem yapabilirken actionlar asenkron çalıştığı için birden fazla işlem yapabilmektedir.
    increaseLikes: ({ commit }, payload) => commit("imcreaseLikes", payload),
    decreaseLikes: ({ commit, state }) => {
      if (state.activeUser.likeNumber > 0) commit("decreaseLikes");
    },
    increaseLikesAsync: ({ commit }, payload) => {
      //resolve,reject parametrelerini almaktadır.
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("imcreaseLikes", payload);
          resolve(); // çağırma işlemi yaptıktan sonra tamamlanınca .then() içine yazdığımız kodlar çalışır.
        }, 3000);
      });
    },
  },
});

