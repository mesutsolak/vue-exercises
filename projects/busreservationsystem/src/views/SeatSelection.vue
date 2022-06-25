<template>
  <div class="container">
    <h2>Koltuk Seçimi</h2>
    <table class="table table-bordered text-center">
      <tr>
        <td v-for="seat in getSeatList('Çiftli', 'Cam Kenarı')" :key="seat.id">
          <button
            :class="{
              seat: seat.status === 0,
              'seat seat-full': seat.status === 1,
              'seat seat-rez': seat.status === 2,
            }"
            :disabled="seat.status === 1"
            @click="seatSelect(seat.id)"
          >
            {{ seat.number }}
          </button>
        </td>
      </tr>
      <tr>
        <td v-for="seat in getSeatList('Çiftli', 'Koridor')" :key="seat.id">
          <button
            :class="{
              seat: seat.status === 0,
              'seat seat-full': seat.status === 1,
              'seat seat-rez': seat.status === 2,
            }"
            :disabled="seat.status === 1"
            @click="seatSelect(seat.id)"
          >
            {{ seat.number }}
          </button>
        </td>
      </tr>
      <tr>
        <td v-for="seat in getSeatList('Tekli', 'Cam Kenarı')" :key="seat.id">
          <button
            :class="{
              seat: seat.status === 0,
              'seat seat-full': seat.status === 1,
              'seat seat-rez': seat.status === 2,
            }"
            :disabled="seat.status === 1"
            @click="seatSelect(seat.id)"
          >
            {{ seat.number }}
          </button>
        </td>
      </tr>
    </table>

    <button
      class="btn btn-success float-right"
      @click="enterPassengerInformation"
      v-if="selectedSeats.length > 0"
    >
      Yolcu Bilgilerini Gir
    </button>

    <hr />
  </div>
</template>

<script>
import db from "../assets/db.json";
import { GlobalData } from "../main";

export default {
  data() {
    return {
      expeditions: [],
      seats: [],
      foundSeats: [],
      selectedSeats: [],
      selectedExpedition: [],
    };
  },
  created() {
    this.expeditions = db.expeditions;
    this.seats = db.seats;
    this.fetchSeats();
    // this.selectedSeats = GlobalData?.selectedSeats;
  },
  methods: {
    fetchSeats() {
      let expeditionId = 1;

      if (this.$route.params.expeditionId) {
        expeditionId = parseInt(this.$route.params.expeditionId);
      } else if (
        GlobalData.selectedExpedition != null &&
        GlobalData.selectedExpedition.id
      ) {
        expeditionId = parseInt(GlobalData.selectedExpedition.id);
      } else {
        this.$router.push({ name: "expeditionSearch" });
      }

      this.selectedExpedition = this.expeditions.find(
        (x) => x.id == expeditionId
      );
      this.foundSeats = this.seats.filter(
        (k) => k.expeditionId == expeditionId
      );
    },
    getSeatList(type, location) {
      return this.foundSeats.filter(
        (k) => k.type === type && k.location === location
      );
    },
    seatSelect(seatId) {
      let seat = this.foundSeats.find((k) => k.id == seatId);
      seat.status = seat.status == 0 ? 2 : 0;
      if (seat.status == 0) {
        this.selectedSeats = this.selectedSeats.filter((k) => k.id != seatId);
      } else {
        this.selectedSeats.push(seat);
      }
    },
    enterPassengerInformation() {
      GlobalData.selectedExpedition = this.selectedExpedition;
      GlobalData.selectedSeats = this.selectedSeats;
      this.$router.push({ name: "passengerInformation" });
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
