const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // Projelerimizi ana dizinde değil de vue-proje gibi bir alt klasörde yayınlamak için alttaki yapıyı kullanırız.
  baseUrl: process.env.NODE_ENV === "production" ? "/vue-proje" : "/",
});
