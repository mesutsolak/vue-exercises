<template>
  <div class="container">
    <div class="card" style="width:18rem;" v-if="profileImage">
    <img class="card-img-top" :src="profileImage" alt="Profil Resmi">
    <div class="card-body">
        <h5 class="card-title">
            {{ firstAndLastName}}
            <span class="badge badge-success" v-if="isPopular"> Popüler</span>       
        </h5>
        <p class="card-text"> {{ $store.state.activeUser.Title }} </p>
        <p class="card-text"> {{ $store.state.activeUser.LikeNumber }} beğenisi var</p>
    </div>

    <hr>
    <button @click="UserSettings" class="btn btn-primary mr-2">Kullanıcı Ayarla</button>
    <button @click="increaseLikes" class="btn btn-success mr-1">Beğeni Arttır</button>
    <button @click="decreaseLikes" class="btn btn-danger">Beğeni Azalt</button>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

/*
    Dinamik olarak resim bind etmek için require özelliğini ya da import özelliğini kullanmalıyız.
    Vuex içerisinde sadece resim ismini tutmalıyız.
    ... spead operatörü computed içerisinde hem method , property kullanımına izin 
    verirken hem de mapgetters kullanımına izin vermektedir.
    Mutation metotlar senkron olarak çalışması zorunludur.Asenkron bir işlem yapamamaktayız.
    Asenkron olarak kullanmak için Actionlardan yararlanmaktayız.
    Google chrome extension vue kullanarak her bir mutation işlemini görebilir ve revert
    diyerek geri alma işlemini yapabiliriz.

    Revert - Time Travel - Commit
    Commit : ilgili mutation artık base state hale gelmiştir.Bundan sonraki mutation işlemleri
    bu mutation işlemi bu base state üzerinden ilerlemiş olacaktır.
    Time Travel : bir önceki duruma geçebiliriz.
    Revert All : Hepsini geriye al.
*/ 

export default {
    name:'app',
    // created(){
    //     // local yerine global olarak tanımlanmalıdır.
    //     this.$store.state.activeUser.LikeNumber = 100;
    // },
    created(){
        // this.$store.mutations.UserSetting(); diyemiyoruz.
        //commit içine mutation ismini yazarak çağırma işlemimizi gerçekleştiriyoruz.
        this.$store.commit('UserSetting');
    },
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
        /*
            Sayfa ilk açıldığında resim yüklenmediği için değerin var olup olmadığının
            kontrolünün yapılması gerekmektedir.
        */ 
            if(this.$store.state.activeUser.profileImage){
            return require('../assets/' + this.$store.activeUser.profileImage);
            }
return null;
        },
        ...mapGetters(['isPopular','firstAndLastName'])
    },
    methods:{
        userSetting(){
            this.$store.commit('userSetting');
        },
        increaseLikes(){
            this.$store.commit('increaseLikes',5);
        },
        decreaseLikes(){
            //obje gönderebiliriz
            this.$store.commit('decreaseLikes',{ value : 1 });
        }
    }
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
</style>
