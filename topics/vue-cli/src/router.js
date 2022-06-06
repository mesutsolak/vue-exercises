import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import AlertCount from "./components/AlertCount.vue";
import NotFound from "./components/NotFound.vue";
import Photos from "./components/PhotosGallery.vue";

import NProgress from "nprogress";

Vue.use(Router);

const router = new Router({
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

/*
  npm install nprogress paketiyle yukarıda dolan bir progress UI elde etmiş oluruz.Sayfa
  yüklenme durumunu gösteren bir çubuktır.
  Bir route bağlantısına tıklandığı anda önce "beforeEach" guard tanımları çalıştırılır.
  Daha sonra "beforeResolve" guard tanımları çalıştırılır.Sonrasında tıklanan route sayfası yüklenir.
  Yükleme tamamlandıktan sonra "afterEach" guard tanımları çalıştırılır.  
*/

// to gelen from giden next() gelen işlem.
router.beforeEach((to, from, next) => {
  console.log(to, from);
  next(); // İşlemlerin sırasıyla devam etmesi için gereklidir.
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
