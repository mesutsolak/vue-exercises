const userApp = new Vue({
  el: "#app",
  name: "Remote Course",
  data: {
    message: "Merhaba",
    email: "",
    alertType: "",
    alertText: "",
    activeUser: { id: 0, role: "Seçiniz" },
    users: [
      {
        id: 1,
        email: "mesutsolak@hotmail.com",
        role: "Admin",
      },
      {
        id: 2,
        email: "cihatsolak@hotmail.com",
        role: "User",
      },
      {
        id: 3,
        email: "ceyhansolak@hotmail.com",
        role: "Admin",
      },
    ],
  },
  methods: {
    newUser() {
      debugger;
      if (
        this.activeUser.email == undefined ||
        this.activeUser.role == "Seçiniz"
      ) {
        this.alertType = "alert alert-danger";
        this.alertText = "Lütfen boş bıraktığınız yerleri doldurun.";
      } else {
        if (!this.users.some((user) => user.id == this.activeUser.id)) {
          this.activeUser.id =
            Math.max.apply(
              Math,
              this.users.map((user) => user.id)
            ) + 1;
          this.users.push(this.activeUser);
        }

        this.alertType = "alert alert-success";
        this.alertText = "Kullanıcı başarıyla kaydedildi.";
        this.clearUser();
      }
    },
    clearUser() {
      this.activeUser = { id: 0, role: "Seçiniz" };
    },
    clearUserAddModal() {
      this.clearUser();
      this.alertType = "";
      this.alertText = "";
    },
    removeUserIndex(index) {
      this.users.splice(index, 1);
      //Array içinden bir veri silmek için ikinci yöntem.
      //this.$delete(this.users,index);
    },
    removeUserId(id) {
      var foundUser = this.users.find((user) => user.id == id);
      if (foundUser != null) {
        this.users = this.users.filter((user) => user.id != foundUser.id);
      }
    },
    userFind(id) {
      var foundUser = this.users.find((user) => user.id == id);
      if (foundUser != null) {
        $("#newUserModal").modal("show");
        this.activeUser = foundUser;
      }
    },
  },
});
