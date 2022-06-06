import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import AlertCount from "./components/AlertCount.vue";
import NotFound from "./components/NotFound.vue";
import Photos from "./components/PhotosGallery.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "helloWorld",
      component: HelloWorld,
    },
    {
      path: "/alertcount",
      name: "alertcount",
      component: AlertCount,
    },
    {
      path: "/photos/:id",
      name: "photos",
      component: Photos,
    },
    //Hatalı bir url geldiğinde hangi sayfaya yönlendirmesi gerektiğini belirtir.Dilersek Redirect yapılabilir.
    {
      path: "*",
      component: NotFound,
      // redirect: "/",
    },
  ],
});
