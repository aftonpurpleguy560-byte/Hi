/**
 * Purpleguy © 2026 - tablet power
 * Efe Mert - Gamer & Developer Linktree Projesi
 */

// Varsayılan dil ayarı
let currentLang = 'tr';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const avatar = document.getElementById('user-avatar');
    
    // Yüklediğin profil.jpg dosyasını kontrol eder ve basar
    if (avatar) {
        avatar.src = "profil.jpg";
    }

    // Dil değiştirme butonu fonksiyonu
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // Dili değiştir (tr <-> en)
            currentLang = currentLang === 'tr' ? 'en' : 'tr';
            
            // HTML içindeki elementleri ID'lerine göre bul
            const titleElement = document.getElementById('title');
            const subtitleElement = document.getElementById('subtitle');
            const bioElement = document.getElementById('bio-text');
            const ytBtnElement = document.getElementById('btn-yt');
            const instaBtnElement = document.getElementById('btn-insta');

            // Translations.js dosyasındaki verileri elementlere aktar
            if (titleElement) {
                titleElement.innerHTML = translations[currentLang].title;
            }
            
            if (subtitleElement) {
                subtitleElement.innerText = translations[currentLang].subtitle;
            }
            
            if (bioElement) {
                bioElement.innerText = translations[currentLang].bio;
            }
            
            if (ytBtnElement) {
                ytBtnElement.innerText = translations[currentLang].btnYt;
            }
            
            if (instaBtnElement) {
                instaBtnElement.innerText = translations[currentLang].btnInsta;
            }

            // Dil butonunun üzerindeki metni güncelle (English / Türkçe)
            langBtn.innerText = translations[currentLang].btnLang;
        });
    }
});
