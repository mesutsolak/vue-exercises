<template>
  <div class="container">
    <h2>Hareket Noktaları</h2>
    <form @submit.prevent="sefer_ara">
      <div class="form-row align-items-center">
        <div class="col-sm-2">
          <label>Kalkış Noktası</label>
          <select class="form-control" v-model="kalkis_noktasi">
            <option value="">Seçiniz</option>
            <option
              v-for="item in departurePoitns"
              :key="item.id"
              v-text="item.aciklama"
            ></option>
          </select>
        </div>
        <div class="col-sm-2">
          <label>Varış Noktası</label>
          <select class="form-control" v-model="varis_noktasi">
            <option value="">Seçiniz</option>
            <option
              v-for="item in departurePoitns"
              :key="item.id"
              v-text="item.aciklama"
            ></option>
          </select>
        </div>
        <div class="col-sm-2">
          <label>Gidiş Tarihi</label>
          <input type="date" class="form-control" v-model="gidis_tarihi" />
        </div>
        <div class="col-auto">
          <label>&nbsp;</label>
          <button type="submit" class="btn btn-primary btn-block">Ara</button>
        </div>
      </div>
    </form>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      departurePoint : '',
      arrival : '',
      departureDate  : '',
      departurePoitns : []

    }
  },
  methods:{
    expeditionSearch(){

    }
  }
}
</script>
