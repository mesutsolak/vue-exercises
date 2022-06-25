<template>
  <div class="container">
    <h2>Hareket Noktaları</h2>
    <form @submit.prevent="expeditionSearch">
      <div class="form-row align-items-center">
        <div class="col-sm-2">
          <label>Kalkış Noktası</label>
          <select class="form-control" v-model="departurePoint">
            <option value="">Seçiniz</option>
            <option
              v-for="departurePoint in departurePoints"
              :key="departurePoint.id"
              :value="departurePoint.id"
              v-text="departurePoint.description"
            ></option>
          </select>
        </div>
        <div class="col-sm-2">
          <label>Varış Noktası</label>
          <select class="form-control" v-model="arrivalPoint">
            <option value="">Seçiniz</option>
            <option
              v-for="departurePoint in departurePoints"
              :key="departurePoint.id"
              :value="departurePoint.id"
              v-text="departurePoint.description"
            ></option>
          </select>
        </div>
        <div class="col-sm-2">
          <label>Gidiş Tarihi</label>
          <input type="date" class="form-control" v-model="goingDate" />
        </div>
        <div class="col-auto">
          <label>&nbsp;</label>
          <button type="submit" class="btn btn-primary btn-block">Ara</button>
        </div>
      </div>
    </form>
    <hr />
    <div v-if="isLoading">Seferler Yükleniyor...</div>
    {{ message }}
    <div v-if="foundExpeditions.length">
      <h2>Sefer Listesi</h2>
      <table class="table table-striped">
        <tr
          v-for="foundExpedition in foundExpeditions"
          :key="foundExpedition.id"
        >
          <td>
            Kalkış Saati
            <h4>{{ getHour(foundExpedition.departureDate) }}</h4>
          </td>
          <td>
            Bilet Fiyatı
            <h4>{{ foundExpedition.ticketPrice }} ₺</h4>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-success"
              @click="expeditionSelect(foundExpedition.id)"
            >
              Koltuk Seç
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import db from "../assets/db.json";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      departurePoint: "",
      arrivalPoint: "",
      goingDate: "",
      departurePoints: [],
      expeditions: [],
      foundExpeditions: [],
      isLoading: false,
      message: "",
    };
  },
  created() {
    this.departurePoints = db.departurePoints;
    this.expeditions = db.expeditions;
  },
  methods: {
    expeditionSearch() {
      this.isLoading = true;

      this.foundExpeditions = this.expeditions.filter(
        (x) =>
          x.departurePoint == this.departurePoint &&
          x.arrivalPoint == this.arrivalPoint &&
          this.getDate(x.departureDate) == this.getDate(this.goingDate)
      );

      if (this.foundExpeditions.length == 0) {
        this.message = "Bir sefer bulunamadı";
      }
      this.isLoading = false;
    },
    getDate(val) {
      var dateHour = new Date(val);
      //slice sağdan 2 tane al demek
      var date =
        dateHour.getFullYear() +
        "-" +
        ("0" + dateHour.getMonth()).slice(-1) +
        "-" +
        ("0" + dateHour.getDate()).slice(-2);
      return date;
    },
    getHour(val) {
      var dateHour = new Date(val);
      var hour =
        ("0" + dateHour.getHours()).slice(-2) +
        "-" +
        ("0" + dateHour.getMinutes()).slice(-2);
      return hour;
    },
    expeditionSelect(expeditionId) {
      this.$router.push({
        name: "seatSelection",
        params: { expeditionId: expeditionId },
      });
    },
  },
};
</script>
