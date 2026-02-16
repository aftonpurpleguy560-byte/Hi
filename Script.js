/**
 * Purpleguy © 2026 - tablet power
 * Efe Mert - Linktree Projesi
 */

let currentLang = 'tr';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    
    // Sayfa açıldığında profil resmini otomatik düzelt
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.src = "https://github.com/aftonpurpleguy560-byte.png";
    }

    langBtn.addEventListener('click', () => {
        // Dil değiştir
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        
        // Elementleri bul
        const titleElement = document.getElementById('title');
        const subtitleElement = document.getElementById('subtitle');
        const bioElement = document.getElementById('bio-text');
        const ytBtnElement = document.getElementById('btn-yt');
        const instaBtnElement = document.getElementById('btn-insta');

        // Translations.js'den verileri çek ve bas
        if (titleElement) titleElement.innerHTML = translations[currentLang].title;
        if (subtitleElement) subtitleElement.innerText = translations[currentLang].subtitle;
        if (bioElement) bioElement.innerText = translations[currentLang].bio;
        if (ytBtnElement) ytBtnElement.innerText = translations[currentLang].btnYt;
        if (instaBtnElement) instaBtnElement.innerText = translations[currentLang].btnInsta;

        // Dil butonunun yazısını değiştir
        langBtn.innerText = translations[currentLang].btnLang;
    });
});
