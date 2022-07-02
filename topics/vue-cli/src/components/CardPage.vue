<template>
  <div class="container"><div class="card" style="width:18rem;">
    <img class="card-img-top" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">
            {{ firstAndLastName}}
            <span class="badge badge-success" v-if="isPopular"> Popüler</span>       
        </h5>
    </div>
  </div>
</template>

<script>
export default {
    name:'app',
    computed:{
        firstAndLastName(){
            //getters property olarak aldık.
            return this.$store.getters.firstAndLastName;
        },
        isPopular(){
            return this.$store.getters.isPopular;
        }
    }
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
</style>
