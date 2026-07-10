/* -------------------------------------------------
   Translation Dictionary (i18n)
   ------------------------------------------------- */
const i18n = {
    ms: {
        nav_home: "Laman Utama",
        nav_calc: "Kalkulator",
        nav_about: "Tentang Kami",
        hero_title: "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ ۚ وَمَا تُقَدِّمُوا۟ لِأَنفُسِكُم مِّنْ خَيْرٍۢ تَجِدُوهُ عِندَ ٱللَّهِ ۗ إِنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌۭ",
        hero_subtitle: "Dan dirikanlah oleh kamu akan sembahyang dan tunaikanlah zakat dan apa jua yang kamu dahulukan dari kebaikan untuk diri kamu, tentulah kamu akan mendapat balasan pahalanya di sisi Allah. Sesungguhnya Allah sentiasa Melihat segala yang kamu kerjakan.",
        home_title: "Apakah itu Zakat?",
        home_desc: "Zakat adalah salah satu daripada Rukun Islam – kewajipan mengeluarkan sebahagian harta tertentu untuk diserahkan kepada golongan yang layak (asnaf) demi mensucikan harta dan jiwa. Kadar zakat adalah 2.5% daripada aset layak yang memenuhi syarat Nisab (had minimum) dan Haul (simpanan genap setahun).",
        why_title: "Kenapa Memilih eZakat?",
        why_calc_title: "Kalkulator Terperinci:",
        why_calc_desc: "Modul pengiraan berasingan yang telus bagi 4 jenis aset (Perniagaan, Pendapatan, Emas, dan Simpanan) mengikut hukum syarak.",
        why_shneiderman_title: "Prinsip Reka Bentuk Shneiderman:",
        why_shneiderman_desc: "Antaramuka konsisten dengan maklum balas telus, kebolehan memadam nilai (Reset), serta pengepala melekat (Sticky Nav) untuk memudahkan kawalan pengguna.",
        why_accessibility_title: "Mod Kebolehcapaian Khas:",
        why_accessibility_desc: "Pilihan tema warna Deuteranomaly untuk mesra pengguna berkeperluan khas rabun warna merah-hijau.",
        calc_header_title: "Kalkulator Zakat",
        calc_header_desc: "Kira zakat perniagaan, pendapatan, emas, atau wang simpanan anda secara telus dan mudah.",
        calc_trade_title: "Zakat Perniagaan (Trade - زكاة التجارة)",
        calc_trade_asset: "Nilai Aset Semasa / Barang Dagangan (RM):",
        calc_trade_liability: "Liabiliti / Hutang Jangka Pendek (RM):",
        calc_nisab: "Nisab Semasa (RM):",
        calc_haul_trade: "Perniagaan ini telah beroperasi genap setahun (Cukup Haul).",
        btn_calculate: "Hitung Zakat",
        btn_reset: "Padam",
        placeholder_trade_asset: "Contoh: 50000.00",
        placeholder_trade_liability: "Contoh: 10000.00",
        calc_income_title: "Zakat Pendapatan (Income - زكاة المال)",
        calc_income_gross: "Jumlah Pendapatan Kasar Setahun (RM):",
        calc_income_expenses: "Perbelanjaan Asas Dibenarkan Setahun (RM):",
        calc_haul_income: "Harta ini telah dimiliki selama genap setahun (Cukup Haul).",
        placeholder_income_gross: "Contoh: 60000.00",
        placeholder_income_expenses: "Contoh: 12000.00",
        calc_gold_title: "Zakat Emas Simpanan (Gold - زكاة الذهب)",
        calc_gold_weight: "Berat Emas Disimpan (gram):",
        calc_gold_price: "Harga Emas Semasa (RM/gram):",
        calc_haul_gold: "Emas ini telah disimpan genap setahun (Cukup Haul).",
        placeholder_gold_weight: "Contoh: 100.0",
        placeholder_gold_price: "Contoh: 350.00",
        calc_savings_title: "Zakat Wang Simpanan (Savings - زكاة المدخرات)",
        calc_savings_balance: "Baki Terendah Setahun (RM):",
        calc_haul_savings: "Duit simpanan ini tidak pernah dikeluarkan sehingga habis (Cukup Haul).",
        placeholder_savings_balance: "Contoh: 30000.00",
        about_title: "Tentang Kumpulan eZakat",
        about_desc: "Kumpulan pembangun sistem yang komited untuk memudahkan kewajipan keagamaan anda.",
        footer_text: "© 2026 eZakat. All rights reserved.",
        site_title: "eZakat - Kalkulator Zakat",
        hero_alt: "Tangan memegang anak pokok, melambangkan sedekah dan pertumbuhan",
        theme_cb_safe: "Mesra rabun warna",
        theme_normal: "Penglihatan normal",
        info_trade_title: "Zakat Perniagaan",
        info_trade_desc: "Zakat perniagaan ialah zakat yang wajib dikeluarkan hasil daripada harta perniagaan sama ada berasaskan pembuatan, perlombongan, perikanan, perkapalan, pembekalan, pertanian, perkhidmatan atau sebagainya dengan tujuan diperniagakan. Sama ada dalam bentuk perniagaan persendirian, perkongsian, syarikat, atau koperasi.",
        info_income_title: "Zakat Pendapatan",
        info_income_desc: "Zakat yang dikenakan ke atas semua jenis sumber pendapatan, upah, imbuhan, dan gaji yang diperolehi secara halal daripada majikan atau hasil kerja sendiri.",
        info_gold_title: "Zakat Emas",
        info_gold_desc: "Zakat ke atas emas yang disimpan sebagai pelaburan atau emas perhiasan yang tidak dipakai (melebihi uruf) apabila cukup syarat nisab dan haul.",
        info_savings_title: "Zakat Wang Simpanan",
        info_savings_desc: "Zakat simpanan ialah zakat yang wajib dikeluarkan ke atas wang yang disimpan dalam bentuk simpanan biasa, tetap, semasa, saham, amanah serta lain-lain simpanan.",
        asnaf_header: "8 Golongan Asnaf",
        asnaf_fakir_title: "Fakir",
        asnaf_fakir_desc: "Individu yang langsung tidak mempunyai harta atau pendapatan, atau memilikinya tetapi tidak sampai 50% daripada keperluan asas diri dan tanggungannya.",
        asnaf_miskin_title: "Miskin",
        asnaf_miskin_desc: "Individu yang mempunyai harta atau pendapatan tetapi masih tidak mencukupi had keperluan asasi (hanya mampu menampung lebih 50% keperluan).",
        asnaf_amil_title: "Amil",
        asnaf_amil_desc: "Individu atau badan yang dilantik secara rasmi oleh pihak berkuasa agama untuk mengurus, mentadbir, dan mengagihkan kutipan zakat.",
        asnaf_muallaf_title: "Muallaf",
        asnaf_muallaf_desc: "Individu yang baru memeluk agama Islam atau mereka yang perlu dijinakkan hatinya untuk memperkukuh keyakinan terhadap Islam.",
        asnaf_riqab_title: "Riqab",
        asnaf_riqab_desc: "Golongan hamba yang ingin menebus diri mereka, atau orang Islam yang terbelenggu daripada cengkaman kejahilan, penaklukan, dan penindasan.",
        asnaf_gharimin_title: "Gharimin",
        asnaf_gharimin_desc: "Individu Islam yang berhutang untuk memenuhi keperluan asas bagi kemaslahatan diri, keluarga, atau masyarakat, dan tiada upaya untuk membayarnya.",
        asnaf_fisabilillah_title: "Fisabilillah",
        asnaf_fisabilillah_desc: "Mana-mana individu atau kumpulan yang berjuang, berusaha, dan melibatkan diri dalam aktiviti mempertahankan serta meninggikan syiar Islam.",
        asnaf_ibnusabil_title: "Ibnu Sabil",
        asnaf_ibnusabil_desc: "Musafir yang terputus perbelanjaan atau kehabisan bekalan wang ketika dalam perjalanan yang diharuskan oleh syarak.",

        // Receipts
        receipt_wajib_title: "Wajib Zakat (Zakat al-Mal)",
        receipt_tidak_wajib_title: "Tidak Wajib Zakat",
        receipt_net_assets: "Nilai Bersih Harta:",
        receipt_nisab_limit: "Had Nisab Minimum:",
        receipt_zakat_rate: "Kadar Zakat:",
        receipt_total_payable: "Jumlah Zakat Wajib Dibayar:",
        receipt_tidak_wajib_desc: "Nilai bersih harta anda (<strong>{net}</strong>) tidak melepasi had Nisab minimum semasa (<strong>{nisab}</strong>) atau syarat haul belum dipenuhi."
    },
    en: {
        nav_home: "Home",
        nav_calc: "Calculators",
        nav_about: "About Us",
        hero_title: "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ ۚ وَمَا تُقَدِّمُوا۟ لِأَنفُسِكُم مِّنْ خَيْرٍۢ تَجِدُوهُ عِندَ ٱللَّهِ ۗ إِنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌۭ",
        hero_subtitle: "And establish prayer and give zakat, and whatever good you send forth for yourselves, you will surely find its reward with Allah. Indeed, Allah is All-Seeing of whatever you do.",
        home_title: "What is Zakat?",
        home_desc: "Zakat is one of the Five Pillars of Islam – an obligation to give a specific portion of one's wealth to eligible recipients (asnaf) to purify wealth and soul. The zakat rate is 2.5% of eligible assets that meet the minimum Nisab (threshold) and Haul (held for a full lunar year) requirements.",
        why_title: "Why Choose eZakat?",
        why_calc_title: "Detailed Calculators:",
        why_calc_desc: "Transparent, separate calculation modules for 4 types of assets (Trade, Income, Gold, and Savings) in accordance with Islamic jurisprudence.",
        why_shneiderman_title: "Shneiderman's Design Principles:",
        why_shneiderman_desc: "Consistent interface with clear informative feedback, easy input reset capabilities, and a sticky header for enhanced user control.",
        why_accessibility_title: "Special Accessibility Mode:",
        why_accessibility_desc: "A dedicated Deuteranomaly color theme option to accommodate red-green color-blind users.",
        calc_header_title: "Zakat Calculators",
        calc_header_desc: "Calculate your business, income, gold, or savings zakat transparently and easily.",
        calc_trade_title: "Business Zakat (Trade - زكاة التجارة)",
        calc_trade_asset: "Current Asset Value / Merchandise (RM):",
        calc_trade_liability: "Liabilities / Short-Term Debt (RM):",
        calc_nisab: "Current Nisab (RM):",
        calc_haul_trade: "This business has operated for a full year (Haul met).",
        btn_calculate: "Calculate Zakat",
        btn_reset: "Reset",
        placeholder_trade_asset: "Example: 50000.00",
        placeholder_trade_liability: "Example: 10000.00",
        calc_income_title: "Income Zakat (Income - زكاة المال)",
        calc_income_gross: "Total Gross Annual Income (RM):",
        calc_income_expenses: "Allowable Basic Expenses per Year (RM):",
        calc_haul_income: "This wealth has been held for a full year (Haul met).",
        placeholder_income_gross: "Example: 60000.00",
        placeholder_income_expenses: "Example: 12000.00",
        calc_gold_title: "Savings Gold Zakat (Gold - زكاة الذهب)",
        calc_gold_weight: "Weight of Gold Kept (grams):",
        calc_gold_price: "Current Gold Price (RM/gram):",
        calc_haul_gold: "This gold has been stored for a full year (Haul met).",
        placeholder_gold_weight: "Example: 100.0",
        placeholder_gold_price: "Example: 350.00",
        calc_savings_title: "Savings Zakat (Savings - زكاة المدخرات)",
        calc_savings_balance: "Lowest Balance of the Year (RM):",
        calc_haul_savings: "This savings balance was never fully withdrawn (Haul met).",
        placeholder_savings_balance: "Example: 30000.00",
        about_title: "About the eZakat Team",
        about_desc: "A development team committed to simplifying your religious obligations.",
        footer_text: "© 2026 eZakat. All rights reserved.",
        site_title: "eZakat - Zakat Calculator",
        hero_alt: "Hands holding a plant, representing charity and growth",
        theme_cb_safe: "Colour-blind safe",
        theme_normal: "Normal vision",
        info_trade_title: "Business Zakat",
        info_trade_desc: "Business zakat is an obligatory zakat issued from business assets, whether based on manufacturing, mining, fishery, shipping, supply, agriculture, services, or otherwise with the intention of trading. This applies to sole proprietorships, partnerships, companies, or cooperatives.",
        info_income_title: "Income Zakat",
        info_income_desc: "Zakat imposed on all types of income sources, wages, remunerations, and salaries obtained legally from an employer or self-employment.",
        info_gold_title: "Gold Zakat",
        info_gold_desc: "Zakat on gold kept as an investment or gold jewelry that is not worn (exceeding customary limits) when it meets the conditions of nisab and haul.",
        info_savings_title: "Zakat on Savings",
        info_savings_desc: "Savings zakat (Zakat on savings) is the obligatory charity levied on money kept in ordinary savings, fixed deposits, current accounts, stocks, trusts, and other forms of savings.",
        asnaf_header: "8 Categories of Asnaf",
        asnaf_fakir_title: "Fakir",
        asnaf_fakir_desc: "Individuals who have no wealth or income, or have them but not enough to cover 50% of basic needs for themselves and their dependents.",
        asnaf_miskin_title: "Miskin",
        asnaf_miskin_desc: "Individuals who have wealth or income but still insufficient to meet basic needs (only able to cover more than 50% of needs).",
        asnaf_amil_title: "Amil",
        asnaf_amil_desc: "Individuals or bodies officially appointed by religious authorities to manage, administer, and distribute zakat collections.",
        asnaf_muallaf_title: "Muallaf",
        asnaf_muallaf_desc: "Individuals who have recently embraced Islam or those whose hearts need to be softened to strengthen their faith in Islam.",
        asnaf_riqab_title: "Riqab",
        asnaf_riqab_desc: "Slaves seeking to free themselves, or Muslims burdened by ignorance, subjugation, and oppression.",
        asnaf_gharimin_title: "Gharimin",
        asnaf_gharimin_desc: "Muslims who are in debt to meet basic needs for themselves, their family, or society, and are unable to pay it off.",
        asnaf_fisabilillah_title: "Fisabilillah",
        asnaf_fisabilillah_desc: "Any individual or group striving, struggling, and engaging in activities to defend and uphold the eminence of Islam.",
        asnaf_ibnusabil_title: "Ibnu Sabil",
        asnaf_ibnusabil_desc: "Travelers who are stranded or have run out of funds during a journey permitted by Sharia.",

        // Receipts
        receipt_wajib_title: "Zakat Obligatory (Zakat al-Mal)",
        receipt_tidak_wajib_title: "Not Zakat Obligatory",
        receipt_net_assets: "Net Asset Value:",
        receipt_nisab_limit: "Minimum Nisab Limit:",
        receipt_zakat_rate: "Zakat Rate:",
        receipt_total_payable: "Total Zakat to be Paid:",
        receipt_tidak_wajib_desc: "Your net assets value (<strong>{net}</strong>) does not exceed the current minimum Nisab threshold (<strong>{nisab}</strong>) or the haul requirement has not been met."
    }
};

/* -------------------------------------------------
   Global State
   ------------------------------------------------- */
let currentLanguage = localStorage.getItem('zakatLanguage') || 'ms';

/* -------------------------------------------------
   Navigation handling (SPA logic)
   ------------------------------------------------- */
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
    pages.forEach(p => p.classList.toggle('active', p.id === pageId));
    navButtons.forEach(b => b.classList.toggle('active', b.dataset.page === pageId));
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => showPage(btn.dataset.page));
});

/* -------------------------------------------------
   Theme Toggle
   ------------------------------------------------- */
const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');

function setTheme(isCb) {
    document.body.classList.toggle('theme-cb', isCb);
    updateThemeLabel();
    localStorage.setItem('zakatTheme', isCb ? 'cb' : 'default');
}

function updateThemeLabel() {
    const isCb = themeSwitch.checked;
    const t = i18n[currentLanguage];
    themeLabel.textContent = isCb ? t.theme_cb_safe : t.theme_normal;
}

const savedTheme = localStorage.getItem('zakatTheme');
if (savedTheme === 'cb') {
    themeSwitch.checked = true;
    setTheme(true);
}

themeSwitch.addEventListener('change', e => setTheme(e.target.checked));

/* -------------------------------------------------
   Language Toggle Logic
   ------------------------------------------------- */
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('zakatLanguage', lang);
    document.documentElement.lang = lang;

    // Update document title
    if (i18n[lang].site_title) {
        document.title = i18n[lang].site_title;
    }

    // Update switch button labels
    if (lang === 'ms') {
        langLabel.textContent = 'English';
        langToggle.setAttribute('aria-label', 'Tukar ke Bahasa Inggeris');
    } else {
        langLabel.textContent = 'Bahasa Melayu';
        langToggle.setAttribute('aria-label', 'Switch to Malay');
    }

    // Apply translation to all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });

    // Apply translations to placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[lang][key]) {
            el.setAttribute('placeholder', i18n[lang][key]);
        }
    });

    // Apply translations to image alt text
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (i18n[lang][key]) {
            el.setAttribute('alt', i18n[lang][key]);
        }
    });

    // Update theme toggle label
    updateThemeLabel();

    // Re-render any visible receipt output box
    document.querySelectorAll('.result').forEach(box => {
        renderReceiptContent(box);
    });
}

langToggle.addEventListener('click', () => {
    const nextLang = currentLanguage === 'ms' ? 'en' : 'ms';
    setLanguage(nextLang);
});

/* -------------------------------------------------
   Zakat calculation logic & Form Handling
   ------------------------------------------------- */
function formatRM(num) {
    return `RM ${num.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Render dynamic content of receipt based on language
function renderReceiptContent(resultBox) {
    if (resultBox.dataset.hasResult !== "true") return;

    const isWajib = resultBox.dataset.isWajib === "true";
    const netValue = parseFloat(resultBox.dataset.netValue);
    const zakatValue = parseFloat(resultBox.dataset.zakatValue);
    const nisabValue = parseFloat(resultBox.dataset.nisabValue);

    // Reset background and color overrides to let CSS take control
    resultBox.style.background = "";
    resultBox.style.color = "";

    const t = i18n[currentLanguage];

    if (isWajib) {
        resultBox.innerHTML = `
            <div class="receipt-header">
                <i class="fi fi-rr-check-circle"></i> ${t.receipt_wajib_title}
            </div>
            <div class="receipt-row">
                <span>${t.receipt_net_assets}</span> <strong>${formatRM(netValue)}</strong>
            </div>
            <div class="receipt-row">
                <span>${t.receipt_nisab_limit}</span> <strong>${formatRM(nisabValue)}</strong>
            </div>
            <div class="receipt-row">
                <span>${t.receipt_zakat_rate}</span> <strong>2.5%</strong>
            </div>
            <div class="receipt-row total">
                <span>${t.receipt_total_payable}</span> <strong>${formatRM(zakatValue)}</strong>
            </div>
        `;
    } else {
        const desc = t.receipt_tidak_wajib_desc
            .replace("{net}", formatRM(netValue))
            .replace("{nisab}", formatRM(nisabValue));

        resultBox.innerHTML = `
            <div class="receipt-error-body">
                <strong><i class="fi fi-rr-cross-circle"></i> ${t.receipt_tidak_wajib_title}</strong>
                <p>${desc}</p>
            </div>
        `;
    }
    resultBox.classList.add('show');
}

// Main function to trigger receipt display
function generateReceipt(resultBox, isWajib, netValue, zakatValue, nisabValue) {
    resultBox.dataset.isWajib = isWajib;
    resultBox.dataset.netValue = netValue;
    resultBox.dataset.zakatValue = zakatValue;
    resultBox.dataset.nisabValue = nisabValue;
    resultBox.dataset.hasResult = "true";

    renderReceiptContent(resultBox);
}

// Set up form submission handlers
document.querySelectorAll('.calc-form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        const calcType = form.dataset.calc;
        const resultBox = form.querySelector('.result');

        let net = 0;
        let zakat = 0;
        let isWajib = false;
        let nisab = 0;

        if (calcType === 'trade') {
            const aset = parseFloat(formData.get('aset')) || 0;
            const liabiliti = parseFloat(formData.get('liabiliti')) || 0;
            nisab = parseFloat(formData.get('nisab')) || 0;

            net = aset - liabiliti;
            isWajib = net >= nisab;

        } else if (calcType === 'income') {
            const pendapatan = parseFloat(formData.get('pendapatan')) || 0;
            const belanja = parseFloat(formData.get('belanja')) || 0;
            nisab = parseFloat(formData.get('nisab')) || 0;

            net = pendapatan - belanja;
            isWajib = net >= nisab;

        } else if (calcType === 'gold') {
            const berat = parseFloat(formData.get('berat')) || 0;
            const harga = parseFloat(formData.get('harga')) || 0;

            net = berat * harga;
            nisab = 85 * harga;
            isWajib = berat >= 85;

        } else if (calcType === 'savings') {
            const baki = parseFloat(formData.get('baki')) || 0;
            nisab = parseFloat(formData.get('nisab')) || 0;

            net = baki;
            isWajib = net >= nisab;
        }

        if (isWajib && net > 0) {
            zakat = net * 0.025;
        }

        generateReceipt(resultBox, isWajib, net, zakat, nisab);
    });

    form.addEventListener('reset', () => {
        const resultBox = form.querySelector('.result');
        resultBox.classList.remove('show');
        resultBox.innerHTML = '';
        delete resultBox.dataset.hasResult;
        delete resultBox.dataset.isWajib;
        delete resultBox.dataset.netValue;
        delete resultBox.dataset.zakatValue;
        delete resultBox.dataset.nisabValue;
    });
});

/* Initialize */
setLanguage(currentLanguage);
showPage('home');