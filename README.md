
# Proje: Ders Notuna Göre Geçme Durumu

## Amaç
Kullanıcıdan alınan not değerine göre öğrencinin başarı durumunu belirleyen bir program yazmak. Bu program, kullanıcının geçerli bir not girip girmediğini kontrol eder ve uygun başarı durumunu ekrana yazar.

## Gereksinimler
1. Kullanıcıdan 0 ile 100 arasında bir not değeri alın.
2. Girilen notun geçerli olup olmadığını kontrol edin:
   - Not 0-100 aralığında değilse, kullanıcıya geçersiz giriş mesajı gösterin.
   - Geçerli ise, not aralığına göre başarı durumunu belirleyin.

### Başarı Durumları
- 0-49: Başarısız
- 50-59: Geçer
- 60-69: Orta
- 70-84: İyi
- 85-100: Pekiyi

## Adımlar

### 1. Kullanıcı Girişi Alma
Kullanıcıdan not değerini `prompt()` fonksiyonuyla alın ve bir değişkene atayın.

### 2. Geçerlilik Kontrolü
Kullanıcının girdiği değerin geçerli bir not aralığında olup olmadığını `if-else` ile kontrol edin.
- Eğer not 0 ile 100 arasında değilse, kullanıcıya geçersiz giriş mesajı gösterin ve programdan çıkın veya sonlandırın.

### 3. Başarı Durumunu Belirleme
Eğer not geçerliyse, `switch-case` yapısını kullanarak not aralıklarını gruplandırın.
- `switch-case` ifadesinde, her başarı durumunu temsil eden not aralığı için bir `case` oluşturun. 
- Notu 10'luk dilimlerle gruplamak için `Math.floor(not / 10)` işlemi kullanabilirsiniz.

### 4. Çıktı Gösterme
Kullanıcının girdiği not aralığına göre ekrana "Başarısız", "Geçer", "Orta", "İyi" veya "Pekiyi" şeklinde bir başarı durumu mesajı verin.

## İpuçları
- Hatalı giriş durumunda `console.log()` veya `alert()` ile kullanıcıya bilgi verebilirsiniz.
- Farklı notlar girerek programın çıktısını test edebilir ve her aralık için beklenen sonucu kontrol edebilirsiniz.
