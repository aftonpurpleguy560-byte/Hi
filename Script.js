/**
 * Purpleguy © 2026 - tablet power
 * Bu dosya dil değiştirme mantığını ve buton etkileşimlerini yönetir.
 */

let currentLang = 'tr';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    
    // Dil değiştirme butonu tıklandığında çalışacak fonksiyon
    langBtn.addEventListener('click', () => {
        // Dili değiştir (tr <=> en)
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        
        // index.html içindeki elementleri buluyoruz
        const titleElement = document.getElementById('title');
        const subtitleElement = document.getElementById('subtitle');
        const bioElement = document.getElementById('bio-text');
        const ytBtnElement = document.getElementById('btn-yt');
        const instaBtnElement = document.getElementById('btn-insta');

        // Translations.js dosyasındaki verilerle metinleri güncelliyoruz
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
        
        // Instagram butonunun metnini güncelliyoruz
        if (instaBtnElement) {
            instaBtnElement.innerText = translations[currentLang].btnInsta;
        }

        // Dil değiştirme butonunun üzerindeki yazıyı güncelliyoruz (English/Türkçe)
        langBtn.innerText = translations[currentLang].btnLang;
    });
});
