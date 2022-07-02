<template>
  <div class="container">
    Sayı : {{ count }}
    <button @click="plusNumber">Arttır</button>
  </div>
</template>

<script>
/* 
    Componentler arasında genel bir (merkezileşmiş) veri akışı (yönetmek) için vuex frameworkünü kullanabiliriz. 
    Vuex = State management pattern + Library
    Vuex içindeki bir değeri değiştirdiğimizde anında kullanılan diğer componentlerde değişecektir.
    Component içinde bir let tipinde değişken tanımlayıp global mantığıyla sadece component
    içinde kullanabiliriz.Genele açmak vuex kullanmalıyız.
*/
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    plusNumber: function () {
      this.$store.state.count += 1; 
    },
  },
};
</script>
