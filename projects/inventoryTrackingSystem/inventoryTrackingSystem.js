Vue.component("InventoryFormTemplate", {
  template: "#inventory-form-template",
  data() {
    return {
      record: {},
    };
  },
  methods: {
    saveRecord() {
      /*
       Böyle yazdığımız zaman reactive olmayacaktır.Fakat değişken değerin tekrardan sayfa içinde render olması
       için reactive şeklinde atanması / değiştirilmesi gerekmektedir.

       this.record.id = ++this.$parent.$data.lastId;
       this.record.archive = false;
     */

      //Reactive yapınca sayfa içindeki yapılan tüm atama işlemlerini UI yansır.
      Vue.set(this.record, "id", ++this.$parent.$data.lastId);
      Vue.set(this.record, "archive", false);

      this.$parent.$data.allRecords.push(this.record);
      this.record = {};
    },
  },
});

// Envanter template html'ni js içerisinde tanımlamak yerine referans vererek html içinde tanımlayabiliriz.
Vue.component("InventoryList", {
  template: "#inventory-list-template",
  props: {
    title: { type: String, required: true, default: "Liste" },
    items: { type: Array, required: true, default: "Liste" },
  },
  computed: {
    totalRecord() {
      let total = 0;
      this.items.forEach((item) => {
        total += parseInt(item.piece.toString());
      });
      return total;
    },
    totalPrice() {
      let total = 0;
      this.items.forEach((item) => {
        total += parseFloat(item.price.toString());
      });
      return total.toFixed(2);
    },
  },
  methods: {
    //Listeler birbirleriyle computed yardımıyla bağlı oldukları için birisi değiştiği zaman diğeride değişecektir.
    changeRecordStatus(item) {
      item.archive = !item.archive;
    },
    deleteRecord(id) {
      debugger;
      /*
      1.yöntem
       this.$parent.$data.allRecords = this.$parent.$data.allRecords.filter(
        (record) => record.id !== id
      );
      */
      this.$emit("record-delete", id);
    },
  },
});

const App = new Vue({
  el: "#app",
  data: {
    search: "",
    filteredItems: [],
    lastId: 0,
    record: {},
    allRecords: [
      {
        id: 1,
        title: "Masa",
        category: "Mobilya",
        piece: "1",
        price: 259,
        archive: false,
      },
      {
        id: 2,
        title: "Kitaplık",
        category: "Mobilya",
        piece: "2",
        price: 159,
        archive: false,
      },
      {
        id: 3,
        title: "Monitor",
        category: "Elektronik",
        piece: "5",
        price: 400,
        archive: true,
      },
    ],
  },
  computed: {
    activeRecords() {
      return this.filteredItems.filter((record) => !record.archive);
    },
    archiveRecords() {
      return this.filteredItems.filter((record) => record.archive);
    },
    totalItemActive() {
      let total = 0;
      this.activeRecords.forEach((activeRecord) => {
        total += parseInt(activeRecord.piece);
      });
      return total;
    },
    totalItemArchive() {
      let total = 0;
      this.archiveRecords.forEach((archiveRecord) => {
        total += parseInt(archiveRecord.piece);
      });
      return total;
    },
    totalPriceArchive() {
      let total = 0;
      this.archiveRecords.forEach((archiveRecord) => {
        total += parseFloat(archiveRecord.price.toString());
      });
      return total.toFixed(2);
    },
  },
  methods: {
    recordDeleted(id) {
      this.filteredItems = this.filteredItems.filter(
        (record) => record.id != id
      );
    },
    searchRecords() {
      debugger;
      this.filteredItems = [];
      if (this.search.length > 0) {
        this.allRecords.forEach((record) => {
          if (
            record.title != null &&
            record.title.includes(
              this.search.trim().charAt(0).toUpperCase() +
                this.search.trim().slice(1)
            )
          ) {
            this.filteredItems.push(record);
          }
        });
      } else {
        this.filteredItems = this.allRecords;
      }
    },
  },
  created() {
    this.lastId = this.allRecords.length;
    this.filteredItems = this.allRecords;
  },
});
