# Vue JS

Vue js'nin kendi dökümanına ulaşmak için https://vuejs.org/ web sitesini ziyaret edebilirsiniz. 


Günümüzde vue ile beraber angular ve react alt yapılarıda oldukça popülerdir.Vue js bunlardan farklı olarak çok daha hızlı ve kolay bir şekilde öğrenebilme imkanı sunmasıdır.Bir js alt yapısının popüler olup olmadığıın anlamak için çeşitli yöntemlere başvurabiliriz.
- Google arama trenlerie baktığımız zaman arama sayılarına bakabiliriz.
- Github'da bulunan reponun yıldız alma sayısına bakabiliriz.

![Google Trends](https://user-images.githubusercontent.com/56551511/156060056-c0356c74-ffd6-4ea7-ae0c-2b2a10738fe8.png)

## Kavramlar

{{ }} -> String interpolation anlamına gelmektedir.Mustache'te derler.Bıyık anlamına gelmektedir.

BOM (Browser Object Model) bir standart değildir. Tarayıcılar tarafından tarayıcıya ait işlevlere ve bunun içerisindeki standart objelere erişmeye sağlayan bir modeldir.

DOM (Document Object Model) : Sayfamızdaki tüm nesneleri  tutan bir nesnedir.Virtual dom bu nesnenin bir kopyasını alır.Daha sonra uygulama içerisinde yapılan değişiklikleri
gerçek dom üzerinde yapmaktansa sanal dom üzerinde yapar.Ve sadece değişikliğe uğrayan nesneleri gerçek dom üzerinde günceller.Böylelikle performans artışı sağlar.Resimde gözüken dallar bir paragraf veya bir resim olabilir.Bunlar dğeiştiği zaman in-memory dom üzerinde değişiklik meydana gelir.Bunu kırmızı renkte gösterebiliriz.Real DOM ve In memory dom'u birleştirerek DOM modelini güncellemiş oluruz.

![DOM](https://user-images.githubusercontent.com/56551511/156060168-3f0d9fd3-f654-4645-a516-bc803d416091.png)

## Özellikler

- Vue js ya da vue dinamik web arayüzleri oluşturmak için geliştirilmiş bir popüler bir javascript alt yapısıdır.
- İçerisinde yer alan yapılar ve ek kütüphanelerle hızlı ve kolay bir şekilde uygulamalar geliştirebiliriz.
- Vue js'in çekirdek kütüphanesi core kütüphanesi view katmanına yani sayfa içerisindeki değişikliklere odaklanmış olsada ek kütüphanelerle beraber
çok daha gelişmiş single page yani tek sayfa uygulamalar geliştirebilirsiniz.

![Alt Yapılar](https://user-images.githubusercontent.com/56551511/156059402-d23003e1-99ec-4cb1-a82f-ad8c678583c3.png)

## Avantajları

- Jquery gibi dosya olarak kullanabiliriz.
- Vue js çekirdek kütüphanesinin boyutu oldukça küçüktür.Harici olarak sayfaya ekleyerek kullanmaya başlayabiliriz.
- Vue js içerisinde kullanacağınız ek işlevler için ayrı kütüphaneleri uygulamamıza eklememiz gerekir.
- Vue js diğer alt yapılara göre hızlı ve daha kolay öğrenilebilir bir frameworktür.Böylelikle diğer alt yapılara göre daha başarılı sonuçlar doğurur.
- Vue js sayfadaki elemanların yönetimlerinde Virtual DOM kullanır.
 
Single Page Application Nedir ? (SPA)

Tek sayfa olmayan uygulamalar bir linke tıkladığımız zaman tekrar bütün sayfaları tekrar yükler.
Fakat tek sayfa olan uygulamalarda yüklemesini istemediğimiz örn header ve left menü bunları belirleyerek tekrar tekrar yüklenmemesini sağlayabiliriz.
Böylelikle sayfa içerisinde bazı alanların sabit kalmasını isteyebiliriz.İçeriğin değişmesini istediğimiz aslında @RenderBody ile tabir ettiğimiz alanın 
tek güncellenmesini sağlayabiliriz.Sayfanın içerisindeki bir bölüm güncellenecektir.Böylelikle web uygulamalarımız daha performanslı çalışacaktır.

Böylelikle sayfaların daha hızlı ve performanslı açılacaktır.Yüklenmesi hızlanacaktır.Tek sayfa uygulamlaran tek faydası bu değildir.

Vue js ile çalışırken ;

- PhpStorm / Visual Studio gibi IDE'leri kullanabiliriz.
- Boostrap kullanabiliriz.
- Google Chromenun bize sağlamış olduğu Vue.js devtools uzantısını ekleyebiliriz.

Vue js içerisinde iki tane js versiyonu bulunur.Bir tanesi development versiyon (js) bir tanesi production versiyonudur (min.js).

## Sayfa Yaşam Döngüsü

- Bazı methodların tetiklenmesi sağlanır.Güncelleme - ekleme - silme işleminde vs.Bu tür işlemler gerçekleşirken tanımladığımız methodlar çalışır.

 ## Bağlama Yöntemleri:

- En bilindik bind yöntemi {{ fiyat }}  
- v-text : text-interpolation kullanmadan bind etmek için kullanılır.
- v-html : bir string içerisindeki html kodlarını html'e çevirmek için v-html kullanılır.
- v-once : two way binding kullanırken bir kere değiştirilen elemanın daha fazla değiştirilmemesi için kullanılır.Const mantığı gibi düşünebilirsin.
- v-model: two way binding olarak kullanmak istersek yazılır.


## Ana repolar:

- https://github.com/vuejs/vue
- https://github.com/facebook/react
- https://github.com/angular/angular

## Araştırılacaklar
1.CDN nedir ve neden kullanılır ?
2.IDE nedir ?
