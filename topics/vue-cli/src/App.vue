<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js App" />
    <alert-count></alert-count>
    <div id="nav">
      <router-link to="/">Home | </router-link>
      <router-link to="/alertcount">AlertCount |</router-link>
      <router-link to="/photos/1">Photo 1 </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AlertCount from "./components/AlertCount.vue";

export default {
  name: "App",
  components: {
    "hello-world": HelloWorld,
    "alert-count": AlertCount,
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
@import "../node_modules/nprogress/nprogress.css";

/*
    Style içerisinde lang diye tabir ettiğimiz özellik stil işlemlerinin derleneceği yapıyı belirtmektedir.
    Örneğin : lang = "scss" yazdığımızda scss derleme özelliğini kullanacağını bilgisini vermiş oluyoruz.
    scoped ise tanımladığımız css bilgilerinin sadece bu component içinde kullanılacağı anlammına gelmektedir.
    Zaten bu komponentlerin ayrılmasının birinci sebebi kendi özelinde kodların yazılmasıdır.
    Global olarak tanımlamak istediklerimizi App.Vue içerisinde yapmamız gerekmektedir.
    App.Vue bilindiği gibi başlangıç dosyamızdır.Main.js içerisinden ayarlıyoruz.
    Komponentleri ayırt etmek için div içinde id değeride verebilirsiniz.
    <template> içerisinde html tasarımlarımızı yapabiliriz.
    export default içerisinde components ve props tanımlayabilir bunları gerekli gördüğümüz yerde kullanabiliriz.
    Komponent içinde "hello-world" ya da helloWorld: olarak tanımlayıp <template> içerisinde kullandıktan
    sonra çıkan hata otomatik olarak düzelecektir.
    - karakteri varsa  ' ' içerisinde yazmamız gerekir.
 */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
