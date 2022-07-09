import axios from "axios";

let instance = axios.create({
  baseUrl: "http://127.0.0.1:8000/api/",
  timeout: 500,
  headers: {
    Authorization: "Bearer xx",
    "Content-type": "application/json",
  },
});

/* 
  Interceptor yapılarını farklı axios instancelarında kullanabilirsiniz.İnterceptor yapıları
  request ve response ifadelerini yönetmemize sağlayan bir yapıdır.
  Console.log kullanarak bize gelen data içerisindeki verileri daha iyi bir şekilde görebiliriz.

  vue.interceptors.request.use -> şeklinde kullanım yaparsak bu düz bir şekilde axios kullanan yerleri etkileyecektri.Özel olarak
  create edilen axios yapısını etkilemeyecektir.

 

*/

instance.interceptors.request.use(function (config) {
  console.log(
    "Request yapıldı (" + config.method + ")",
    config.baseUrl + config.url
  );

  return config;
});

instance.interceptors.response.use(
  //Dönen response değeri başarılı ise
  function (response) {
    console.log("Response yapıldı (" + response.status + ")");

    return response;
  },
  function (error) {
    // Dönen dizi değerini parçalamak için
    const { status, statusText, data } = error.response;

    // if (error.response != null) {
    //   toastr.error(error.response.data.message, "Hata");
    // } else {
    //   toastr.error(error.message, "Hata");
    // }

    if (status >= 500) {
      toastr.error(data.message, "Hata");
    }

    /* 
      Çağrılan yerde .then() kullanırken blok içerisine girmesin diye kullanmaktayız.
      if(response && response.data) -> Bu bloğu yazmaya gerek kalmayacaktır.

    */
    return Promise.reject(error);
  }
);

export default instance;
