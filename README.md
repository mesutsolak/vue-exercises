# Vue Hakkında

İlgili kütüphaneyi Vue ya da Vue js olarak da isimlendirebiliriz.

Vue kütüphanesinin kendi dökümanına ulaşmak için https://vuejs.org/ web sitesini ziyaret edebilirsiniz. 

Günümüzde Vue ile beraber Angular ve React alt yapılarıda oldukça popülerdir.Vue kütüphanesi bunlardan farklı olarak çok daha hızlı ve kolay bir şekilde öğrenebilme imkanı sunmaktadır.

Bir javascript alt yapısının popüler olup olmadığını anlamak için çeşitli yöntemlere başvurabiliriz.
- Google arama trend sayısına
- Github da bulunan reponun yıldız alma sayısına

bakarak belirtilen konu ile alakalı bilgi sahibi olabiliriz.

![Google Trends](https://user-images.githubusercontent.com/56551511/156060056-c0356c74-ffd6-4ea7-ae0c-2b2a10738fe8.png)

## Kavramlar

Virtual Dom : Sanal Dom  
In-Memory Dom : Bellek içi Dom  
Real Dom : Gerçek Dom  

{{ }} -> String interpolation anlamına gelmektedir.Bu sembole Mustache'te derler ve ilgili sembol bıyık anlamına gelmektedir.

BOM (Browser Object Model)  : Tarayıcı nesne modeli olarak çevirebiliriz.Bir standart değildir. Tarayıcılar tarafından tarayıcıya ait işlevlere ve bunun içerisindeki standart objelere erişmeyi sağlayan bir modeldir.

DOM (Document Object Model) :  Belge nesne modeli olarak çevirebiliriz.Sayfamızdaki tüm nesneleri tutan bir nesnedir.Virtual Dom bu nesnenin bir kopyasını alır.Daha sonra uygulama içerisinde yapılan değişiklikleri Real Dom üzerinde yapmaktansa Virtual Dom üzerinde yapar.Sadece değişikliğe uğrayan nesneleri Real Dom üzerinde günceller.Böylelikle performans artışı sağlar.Resimde gözüken dallar bir paragraf veya bir resim olabilir.Bunlar değiştiği zaman In-Memory Dom üzerinde değişiklik meydana gelir.Bunu resim üzerindeki kırmızı renkten görebilirsiniz.Real Dom ve In Memory Dom'u birleştirerek Dom modelini güncellemiş oluruz.

![DOM](https://user-images.githubusercontent.com/56551511/156060168-3f0d9fd3-f654-4645-a516-bc803d416091.png)

## Özellikler

- Vue dinamik web arayüzleri oluşturmak için geliştirilmiş bir popüler javascript alt yapısıdır.
- İçerisinde yer alan yapılar ve ek kütüphanelerle , hızlı ve kolay bir şekilde uygulamalar geliştirebiliriz.
- Vue'nün çekirdek kütüphanesinin core kütüphanesi view katmanına yani sayfa içerisindeki değişikliklere odaklanmış olsa da ek kütüphanelerle beraber çok daha gelişmiş tek sayfa uygulamaları geliştirebiliriz.

![Alt Yapılar](https://user-images.githubusercontent.com/56551511/156059402-d23003e1-99ec-4cb1-a82f-ad8c678583c3.png)

## Avantajları

- Jquery gibi dosya olarak kullanabiliriz.
- Vue çekirdek kütüphanesinin boyutu oldukça küçüktür.Harici olarak sayfaya ekleyerek kullanmaya başlayabiliriz.
- Vue içerisinde kullanacağınız ek işlevler için ayrı kütüphaneleri uygulamamıza eklememiz gerekir.
- Vue diğer alt yapılara göre hızlı ve daha kolay öğrenilebilir bir frameworktür.Böylelikle diğer alt yapılara göre daha başarılı sonuçlar doğurur.
- Vue sayfadaki elemanların yönetimlerinde Virtual Dom kullanmaktadır.
 
## Single Page Application Nedir ? (SPA)

Tek sayfa olmayan uygulamalar bir linke tıkladığımız zaman bütün sayfaları tekrar yükler.
Fakat tek sayfa olan uygulamalar yüklenmesini istemediğimiz örn header ve left menü gibi alanları belirleyerek tekrar tekrar yüklenmemesini sağlayabiliriz.

Böylelikle sayfa içerisinde bazı alanların sabit kalmasını isteyebiliriz.İçeriğin değişmesini istediğimiz aslında @RenderBody ile tabir ettiğimiz alanın tek güncellenmesini sağlayabiliriz.Böylelikle sadece web sayfasının belli bir bölümü güncellenecektir.Sayfanın belli kısımının güncellemesi performans olarak oldukça artış gösterecektir.

SPA uygulamaların tek faydası hızlı çalışması değildir.

## Vue Çalışırken

- PhpStorm / Visual Studio gibi IDE araçlarını kullanabiliriz.
- Frontend tarafında boostrap / semantic web ui gibi hazır css kütüphaneleride kullanabiliriz.
- Google Chromenun bize sağlamış olduğu Vue.js devtools uzantısını ekleyebiliriz.Böylelikle vue js elementlerine istediğimiz gibi müdahale de bulunabiliriz.

Vue içerisinde iki tane js dosyası bulunmaktadır.Bir tanesi development (js) bir tanesi production versiyonudur (min.js).

## Sayfa Yaşam Döngüsü

- Bazı methodların tetiklenmesi sağlanır.Güncelleme - ekleme - silme işleminde vs.Bu tür işlemler gerçekleşirken tanımladığımız methodlar çalışır.

## Ana repolar:

- https://github.com/vuejs/vue
- https://github.com/facebook/react
- https://github.com/angular/angular
