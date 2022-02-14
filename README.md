# Vue JS

Concepts :

{{ }} -> String interpolation anlamına gelmektedir.

BOM (Browser Object Model) bir standart değildir. Tarayıcılar tarafından tarayıcıya ait işlevlere ve bunun içerisindeki standart objelere erişmeye sağlayan bir modeldir.

DOM (Document Object Model) : Sayfamızdaki tüm nesneleri  tutan bir nesnedir.Virtual dom bu nesnenin bir kopyasını alır.Daha sonra uygulama içerisinde yapılan değişiklikleri
gerçek dom üzerinde yapmaktansa sanal dom üzerinde yapar.Ve sadece değişikliğe uğrayan nesneleri gerçek dom üzerinde günceller.Böylelikle performans artışı sağlar.

Single Page Application Nedir ? (SPA)

Tek sayfa olmayan uygulamalar bir linke tıkladığımız zaman tekrar bütün sayfaları tekrar yükler.
Fakat tek sayfa olan uygulamalarda yüklemesini istemediğimiz örn header ve left menü bunları belirleyerek tekrar tekrar yüklenmemesini sağlayabiliriz.
Böylelikle sayfa içerisinde bazı alanların sabit kalmasını isteyebiliriz.İçeriğin değişmesini istediğimiz aslında @RenderBody ile tabir ettiğimiz alanın 
tek güncellenmesini sağlayabiliriz.Sayfanın içerisindeki bir bölüm güncellenecektir.

Böylelikle sayfaların daha hızlı ve performanslı açılacaktır.Yüklenmesi hızlanacaktır.Tek sayfa uygulamlaran tek faydası bu değildir.

Özellikler

- Vue js ya da vue dinamik web arayüzleri oluşturmak için geliştirilmiş bir popüler bir javascript alt yapısıdır.
- Vue js'in çekirdek kütüphanesi core kütüphanesi view katmanına yani sayfa içerisindeki değişikliklere odaklanmış olsada ek kütüphanelerle beraber
çok daha gelişmiş single page yani tek sayfa uygulamalar geliştirebilirsiniz.
- Günümüzde vue'nin en büyük rakipleri ve oldukça popüler olan javascript 

Vue js avantajları : 

- Jquery gibi dosya olarak kullanabiliriz.
- Vue js çekirdek kütüphanesinin boyutu oldukça küçüktür.Harici olarak sayfaya ekleyerek kullanmaya başlayabiliriz.
- Vue js içerisinde kullanacağınız ek işlevler için ayrı kütüphaneleri uygulamamıza eklememiz gerekir.
- Vue js diğer alt yapılara göre hızlı ve daha kolay öğrenilebilir bir frameworktür.Böylelikle diğer alt yapılara göre daha başarılı sonuçlar doğurur.
- Vue js sayfadaki elemanların yönetimlerinde Virtual DOM kullanır.

Vue js ile çalışırken ;

- PhpStorm / Visual Studio gibi IDE'leri kullanabiliriz.
- Boostrap kullanabiliriz.
- Google Chromenun bize sağlamış olduğu Vue.js devtools uzantısını ekleyebiliriz.

Vue js içerisinde iki tane versiyon bulunuyor.Bir tanesi development versiyon (js) bir tanesi production versiyonudur (min.js).

Vue Life Cycle (Vue Yaşam Döngüsü) 

* Bazı methodların tetiklenmesi sağlanır.Güncelleme işleminde vs.

Vue JS Data Binding :

- Mustache {{ fiyat }} tek bind kullanımı. -> Mustache bıyık anlamına gelmektedir.
- v-text : text-interpolation kullanmadan bind etmek için kullanılır.
- v-html : bir string içerisindeki html kodlarını html'e çevirmek için v-html kullanılır.
- v-once : two way binding kullanırken bir kere değiştirilen elemanın daha fazla değiştirilmemesi için kullanılır.Const mantığı gibi düşünebilirsin.
- v-model: two way binding olarak kullanmak istersek yazılır.

Ana repolar:

* https://github.com/vuejs/vue
* https://github.com/facebook/react
* https://github.com/angular/angular
