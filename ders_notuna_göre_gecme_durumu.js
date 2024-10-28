//! Proje: Ders Notuna Göre Geçme Durumu
//! Amaç:
/*
 *Kullanıcıdan alınan not değerine göre öğrencinin başarı
 *durumunu belirleyen bir program yazmak. Bu program,
 *kullanıcının geçerli bir not girip girmediğini kontrol
 *eder ve uygun başarı durumunu ekrana yazar.
 */

//! Gereksinimler:
/*
?1- Kullanıcıdan 0 ile 100 arasında bir not değeri alın.
?2- Girilen notun geçerli olup olmadığını kontrol edin:
    *Not 0-100 aralığında değilse, kullanıcıya geçersiz giriş mesajı gösterin.
    *Geçerli ise, not aralığına göre başarı durumunu belirleyin.
?3- Başarı Durumları:
    *0-49: Başarısız
    *50-59: Geçer
    *60-69: Orta
    *70-84: İyi
    *85-100: Pekiyi
*/
//! Kullanıcıdan notu al
let not = parseFloat(prompt("Lütfen 0 ile 100 arasında not giriniz:"));
//! Geçerlilik kontrolü
if (not < 0 || not > 100) {
  console.log(
    "Geçersiz not girdiniz. Lütfen 0 ile 100 arasında bir değer girin."
  );
} else {
    //! Başarı durumu belirleme
  switch (true) {
    case not >= 85 && not <= 100:
      console.log("Pekiyi");
      break;
    case not >= 70 && not < 85:
      console.log("İyi");
      break;
    case not >= 60 && not < 70:
      console.log("Orta");
      break;
    case not >= 50 && not < 60:
      console.log("Geçer");
      break;
    default:
      console.log("Başarısız");
      break;
  }
}
