/**
 * Purpleguy © 2026 - tablet power
 * Dil değiştirme mantığı
 */

let currentLang = 'tr';
const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
    // Dili değiştir (tr -> en veya en -> tr)
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    
    // index.html içindeki elementleri Translations.js verileriyle güncelle
    document.getElementById('title').innerHTML = translations[currentLang].title;
    document.getElementById('subtitle').innerText = translations[currentLang].subtitle;
    document.getElementById('bio-text').innerText = translations[currentLang].bio;
    document.getElementById('btn-yt').innerText = translations[currentLang].btnYt;
    
    // Dil butonunun üzerindeki yazıyı güncelle
    langBtn.innerText = translations[currentLang].btnLang;
});

