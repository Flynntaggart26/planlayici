# 📚 StudyFlow — Ders Çalışma Planlayıcısı

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![No Build](https://img.shields.io/badge/Setup-No_Build-6366f1)
![i18n](https://img.shields.io/badge/i18n-TR_%2F_EN-10b981)
![Storage](https://img.shields.io/badge/Storage-localStorage-06b6d4)
![Theme](https://img.shields.io/badge/Theme-Light_%2F_Dark-8b5cf6)
![Responsive](https://img.shields.io/badge/Design-Responsive-ec4899)
![License](https://img.shields.io/badge/License-MIT-green)

**StudyFlow**, öğrenciler için tasarlanmış, kurulum gerektirmeyen modern bir **ders çalışma planlayıcısıdır**.
Görev takibi, haftalık ders programı, takvim, sınav geri sayımı, odak (Pomodoro) zamanlayıcısı ve
ilerleme raporlarını tek bir şık panelde toplar. Verileriniz yalnızca **kendi tarayıcınızda** saklanır —
hesap açmak, sunucu kurmak veya internete bağlı olmak gerekmez.

> 🇬🇧 **English?** The app UI is fully bilingual (TR/EN) — switch language from the sidebar.
> This README is written in Turkish; every feature below works in both languages.

---

## ✨ Öne Çıkan Özellikler

| Alan | Açıklama |
|---|---|
| 📝 **Görev yönetimi** | Ders + konu + not + tarih/saat + süre + öncelik + kategori ile detaylı görevler |
| ⏭⧉ **Hızlı aksiyonlar** | Tek tıkla tamamlama, yarına erteleme, kopyalama, silme |
| 🗓️ **Haftalık program** | Pazartesi–Pazar ders dilimleri (saat aralıklı), gün bazında sayaç |
| 📅 **Aylık takvim** | Görev yoğunluğunu gün hücrelerinde görme, güne tıklayıp detay açma |
| 🎓 **Sınav geri sayımı** | Sınav ekle, kalan günü otomatik gör (son 7 gün vurgulu) |
| 🍅 **Odak zamanlayıcısı** | 25 / 45 / 60 dk Pomodoro + biten oturumların otomatik skoru |
| 🎯 **Haftalık hedef** | Hedef görev sayısı belirle, ilerleme çubuğuyla takip et |
| 🔥 **Çalışma serisi** | Art arda görev bitirdiğin günleri sayan streak takibi |
| 📊 **Raporlar** | Son 7 gün grafiği, derse göre dağılım, en verimli gün analizi |
| 🔔 **Bildirimler** | Günün bekleyen iş özetini tarayıcı bildirimi olarak al |
| 🌙 **Koyu / açık mod** | Tek tıkla tema değişimi, tercihin hatırlanır |
| 🌍 **TR / EN dil desteği** | 75+ arayüz metni anında çevrilir, tarih formatı dile uyar |
| 💾 **Yedekleme** | JSON indir / geri yükle + Excel uyumlu CSV dışa aktarma |
| 📱 **Responsive** | Telefonda tek sütuna düşen, mobil uyumlu tasarım |

---

## 🖥️ Sayfalar ve Açıklamaları

### 1. Dashboard — günün komuta merkezi
- **4 renkli KPI kartı:** bugünkü ilerleme (`tamamlanan/toplam`), bekleyen sayısı, haftalık odak süresi, genel tamamlanma oranı.
- **Bugünün akışı:** tarihi geçmiş + bugüne ait bekleyen görevler öncelik sırasına yakın akışta listelenir.
- **Odak kartı:** Pomodoro zamanlayıcı + bu cihazda biriken oturum/dakika skoru.
- **Haftalık hedef kartı:** Pazartesi–Pazar aralığında biten görev sayısının hedefe oranı.
- **Yaklaşan (3 gün):** önümüzdeki 3 günün görevlerine hızlı bakış.
- **Sınav geri sayımı:** sınav adı + tarih ekle, kalan günü rozet olarak gör.

### 2. Görevler — tüm işlerin kontrol paneli
- Metin arama (ders + konu + not içinde), durum filtresi (tümü / bekleyen / tamamlanan / geciken),
  kategori filtresi ve 3 sıralama modu (tarih / öncelik / ders).
- Özet çubuğu (`X görev • Y bekleyen • Z geciken`), tamamlananları toplu temizleme ve CSV indirme.
- Kategori yönetimi: yeni kategori ekleme / silme (görev formunda otomatik görünür).

### 3. Ders Programı — haftalık rutin
- Gün + ders + başlangıç/bitiş saati ile dilim ekleme; her gün kartında dilim sayacı ve toplam sayaç.
- Sabit haftalık derslerini (okul/kurs programı) bir kez gir, hep gözünün önünde olsun.

### 4. Takvim — ayın kuşbakışı görünümü
- Pazartesi başlayan ızgara, bugünün vurgulanması, günde en fazla 3 ders rozeti + sayaç.
- Herhangi bir güne tıklayınca sağ panelde o günün görev kartları açılır (oradan da tamamlanabilir).

### 5. Raporlar — motivasyonun verisi
- Toplam görev, tamamlanma yüzdesi, planlanan toplam süre.
- Son 7 günün tamamlanan görev grafiği, derse göre dağılım çubukları,
  "en çok çalışılan ders" ve "en verimli gün" içgörüleri.

---

## 🚀 Kullanım

Kurulum **yoktur** — saf HTML + CSS + JS'tir, derleme adımı gerektirmez.

**Yöntem 1 — Çift tık (en kolay):**
1. Bu repoyu indir (`Code → Download ZIP`) veya klonla.
2. `index.html` dosyasına çift tıkla. Hepsi bu. ✅

**Yöntem 2 — Klonla:**
```bash
git clone https://github.com/Flynntaggart26/planlayici.git
cd planlayici
# index.html'i tarayıcıda aç
```

**Yöntem 3 — VS Code Live Server:**
`index.html` → sağ tık → *Open with Live Server* (otomatik yenileme ile geliştirme için ideal).

> 💡 **Veriler nerede?** Tüm veriler tarayıcının `localStorage` alanında
> (`dersPlanlayici_v1` anahtarı) tutulur. Farklı tarayıcı/cihaz arasında senkronize olmaz —
> taşımak için **Raporlar → JSON indir / İçe aktar** özelliğini kullanın.

---

## ⌨️ Klavye ve İpuçları

| İpucu | Açıklama |
|---|---|
| `Esc` | Açık görev penceresini kapatır |
| 🔔 *Günün özetini bildir* | İlk tıklamada tarayıcı bildirim izni ister, sonra özeti bildirim olarak gösterir |
| 🧹 *Temizle* | Yalnızca tamamlanmış görevleri siler, bekleyenlere dokunmaz |
| 🎯 *Hedef* | Hafta Pazartesi–Pazar aralığına göre hesaplanır |

---

## 🗺️ Yol Haritası

- [ ] Sürükle-bırak ile program/görev taşıma
- [ ] Zamanlanmış (otomatik) hatırlatıcılar
- [ ] Ders bazında süre hedefleri
- [ ] PWA desteği (çevrimdışı kurulum + mobil uygulama hissi)
- [ ] GitHub Pages canlı demo bağlantısı

Fikir veya hata bildirimi için [Issues](https://github.com/Flynntaggart26/planlayici/issues) sekmesini kullanın.

---

## 🤝 Katkıda Bulunma

1. Repoyu fork'layın, yeni dal açın (`git checkout -b ozellik/xyz`).
2. Değişikliğinizi yapıp commit'leyin.
3. Pull Request açın — kısa bir açıklama eklemeyi unutmayın.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır — özgürce kullanın, değiştirin, paylaşın. 💜
