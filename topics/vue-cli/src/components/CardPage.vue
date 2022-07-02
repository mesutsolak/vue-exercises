<template>
  <div class="container">
    <div class="card" style="width:18rem;">
    <img class="card-img-top" :src="profileImage" alt="Profil Resmi">
    <div class="card-body">
        <h5 class="card-title">
            {{ firstAndLastName}}
            <span class="badge badge-success" v-if="isPopular"> Popüler</span>       
        </h5>
        <p class="card-text"> {{ $store.state.activeUser.Title }} </p>
        <p class="card-text"> {{ $store.state.activeUser.LikeNumber }} beğenisi var</p>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

/*
    Dinamik olarak resim bind etmek için require özelliğini ya da import özelliğini kullanmalıyız.
    Vuex içerisinde sadece resim ismini tutmalıyız.
    ... spead operatörü computed içerisinde hem method , property kullanımına izin 
    verirken hem de mapgetters kullanımına izin vermektedir.
*/ 

export default {
    name:'app',
    computed:{
        // computed:mapGetters(['isPopular','firstAndLastName'])
        // firstAndLastName(){
        //     //getters property olarak aldık.
        //     return this.$store.getters.firstAndLastName;
        // },
        // isPopular(){
        //     return this.$store.getters.isPopular;
        // }
        profileImage(){
            return require('../assets/' + this.$store.activeUser.profileImage);
        },
        ...mapGetters(['isPopular','firstAndLastName'])
    }
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
</style>
