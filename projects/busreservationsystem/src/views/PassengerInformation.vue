<template>
  <div class="container">
    <h2>Yolcu Bilgileri</h2>
    <form method="post" action="#" @submit.prevent="paymentInformation">
      <div
        v-for="selectedSeat in selectedSeats"
        class="form-inline mb-2"
        :key="selectedSeat.id"
      >
        <label class="mr-2" for="koltuk">Koltuk Numarası</label>
        <input
          type="text"
          class="form-control col-1 mr-3"
          v-model="selectedSeat.number"
          id="koltuk"
          readonly
        />
        <label class="mr-2" for="fiyat">Fiyat</label>
        <input
          type="text"
          class="form-control col-1 mr-3"
          v-model="selectedExpedition.ticketPrice"
          id="fiyat"
          readonly
        />
        <label class="mr-2" for="tck">TCK</label>
        <input
          type="text"
          class="form-control col-2 mr-3"
          name="tck"
          id="tck"
        />
        <label class="mr-2" for="adsoyad">Ad Soyad</label>
        <input
          type="text"
          class="form-control col-2 mr-3"
          name="adsoyad"
          id="adsoyad"
        />
        <label class="mr-2" for="cinsiyet">Cinsiyet</label>
        <input
          type="text"
          class="form-control col-1"
          name="cinsiyet"
          id="cinsiyet"
        />
      </div>

      <h2>Ödeme Bilgileri</h2>
      <div class="row">
        <div class="col-2">
          <label class="mr-2" for="kk_no">Kart No</label>
          <input type="text" class="form-control" name="kk_no" id="kk_no" />
        </div>
        <div class="col-2">
          <label class="mr-2" for="kk_adsoyad">Ad Soyad</label>
          <input
            type="text"
            class="form-control"
            name="kk_adsoyad"
            id="kk_adsoyad"
          />
        </div>
        <div class="col-2">
          <label class="mr-2" for="kk_ccv">CCV</label>
          <input type="text" class="form-control" name="kk_ccv" id="kk_ccv" />
        </div>
        <div class="col-3">
          <label class="mr-2" for="kk_skt_ay">Son Kullanma Tarihi (Ay)</label>
          <input
            type="text"
            class="form-control"
            name="kk_skt_ay"
            id="kk_skt_ay"
          />
        </div>
        <div class="col-3">
          <label class="mr-2" for="kk_skt_yil">Son Kullanma Tarihi (Yıl)</label>
          <input
            type="text"
            class="form-control"
            name="kk_skt_yil"
            id="kk_skt_yil"
          />
        </div>
      </div>
      <button class="btn btn-success float-right">Ödeme Bilgilerini Gir</button>
    </form>
  </div>
</template>

<script>
import { GlobalData } from "../main"; //Global değişken

export default {
  data() {
    return {
      selectedExpedition: {},
      selectedSeats: [],
    };
  },
  created() {
    if (GlobalData.selectedExpedition == null) {
      this.$router.push({ name: "seferara" });
    }

    this.selectedExpedition = GlobalData.selectedExpedition;
    this.selectedSeats = GlobalData.selectedSeats;
  },
  methods: {
    paymentInformation() {
      this.$router.push({ name: "odemebilgileri" });
    },
  },
};
</script>

<style scoped>
.seat {
  background: url(../assets/img/koltuk-bos.svg) no-repeat;
  background-size: contain !important;
  display: inline-block;
  width: 56px;
  height: 70px;
  line-height: 70px;
  font-weight: bold;
  text-align: center;
  color: #555;
  border: 0;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 20px;
  padding-right: 5px;
  margin: 5px 5px 5px 3px;
}

.seat-rez {
  background: url(../assets/img/koltuk-rez.svg) no-repeat;
  color: #fff !important;
}

.seat-full {
  background: url(../assets/img/koltuk-dolu.svg) no-repeat;
  color: #fff !important;
}
</style>
