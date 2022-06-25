<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="./assets/img/bus.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Otobüs Rezervasyon Sistemi
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active"
                >Ana sayfa</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/seferara" class="nav-link" active-class="active"
                >Sefer Ara</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/koltuksecimi"
                class="nav-link"
                active-class="active"
                >Koltuk Seçimi</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/yolcubilgileri"
                class="nav-link"
                active-class="active"
                >Yolcu Bilgileri</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/odemebilgileri"
                class="nav-link"
                active-class="active"
                >Ödeme Bilgileri</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700,700i&subset=latin-ext");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");

body {
  font-family: "Segoe UI Light";
  font-size: 18px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}

.navbar {
  margin-bottom: 20px;
}
</style>
