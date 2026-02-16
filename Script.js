/**
 * Purpleguy © 2026 - tablet power
 * YouTube Profil Resmini Otomatik Çeken Sürüm
 */

let currentLang = 'tr';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const avatar = document.querySelector('.avatar');

    // YouTube profil resmini otomatik çekme fonksiyonu
    // Senin kullanıcı adın: @efemert2181
    if (avatar) {
        // GitHub üzerinden çekmek en stabil yoldur, YouTube resminle aynıysa bunu kullan:
        avatar.src = "https://github.com/aftonpurpleguy560-byte.png";
        
        // Eğer resim yine kırık çıkarsa, geçici olarak şu joker linki kullanabilirsin:
        avatar.onerror = function() {
            this.src = "https://www.youtube.com/s/desktop/28b6717f/img/avatar_with_ring.png";
        };
    }

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        
        const titleElement = document.getElementById('title');
        const subtitleElement = document.getElementById('subtitle');
        const bioElement = document.getElementById('bio-text');
        const ytBtnElement = document.getElementById('btn-yt');
        const instaBtnElement = document.getElementById('btn-insta');

        if (titleElement) titleElement.innerHTML = translations[currentLang].title;
        if (subtitleElement) subtitleElement.innerText = translations[currentLang].subtitle;
        if (bioElement) bioElement.innerText = translations[currentLang].bio;
        if (ytBtnElement) ytBtnElement.innerText = translations[currentLang].btnYt;
        if (instaBtnElement) instaBtnElement.innerText = translations[currentLang].btnInsta;

        langBtn.innerText = translations[currentLang].btnLang;
    });
});
