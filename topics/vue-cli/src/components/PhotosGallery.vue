<template>
  <div class="container">
    <h1>Photos</h1>
    <div class="card" style="width: 18rem" v-if="photo">
      <img :src="photo.url" alt="card-img-top" />
      <div class="card-body">
        <p class="card-text">{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/*
  Hash değişimlerini otomatik olarak yakalamıyor örneğin
  product/1 'den product/2 yaptığın zaman url'i product/1 şeklinde getiriyor.
  Bunun sebebi hash değişimlerini yakalamaması.
  Bunun için watch özelliğinden yararlanmamız gerekmektedir.
  Bir özellik ya da bir değişken değişimi olduğunda methodu tekrar çağırabiliriz.

  Route Navigation Guard (Doküman okunabilir) kullanımı ; bir request geldiği yüklendiğinde ve yüklendikten sonraki
  adımları içeren yapıya denmektedir.NProgress frameworkünü inceleyebilirsin.

*/
export default {
  data() {
    return {
      photo: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      fetch(
        "http://jsonplaceholder.typicode.com/photos/" + this.$route.params.id
      )
        .then((response) => response.json())
        .then((json) => {
          this.photo = json;
        });
    },
  },
};
</script>
