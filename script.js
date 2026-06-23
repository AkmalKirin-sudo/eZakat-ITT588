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
   Theme toggle
   ------------------------------------------------- */
const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');

function setTheme(isCb) {
    document.body.classList.toggle('theme-cb', isCb);
    themeLabel.textContent = isCb ? 'Colour-blind safe' : 'Normal vision';
    localStorage.setItem('zakatTheme', isCb ? 'cb' : 'default');
}

const saved = localStorage.getItem('zakatTheme');
if (saved === 'cb') {
    themeSwitch.checked = true;
    setTheme(true);
}

themeSwitch.addEventListener('change', e => setTheme(e.target.checked));

/* -------------------------------------------------
   Zakat calculation logic & Form Handling
   ------------------------------------------------- */
function formatRM(num) {
    return `RM ${num.toLocaleString('en-MY', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Fungsi utama penjana resit
function generateReceipt(resultBox, isWajib, netValue, zakatValue, nisabValue) {
    // Reset background and color overrides to let CSS take control
    resultBox.style.background = "";
    resultBox.style.color = "";

    if (isWajib) {
        resultBox.innerHTML = `
            <div class="receipt-header">
                <i class="fi fi-rr-check-circle"></i> Wajib Zakat (Zakat al-Mal)
            </div>
            <div class="receipt-row">
                <span>Nilai Bersih Harta:</span> <strong>${formatRM(netValue)}</strong>
            </div>
            <div class="receipt-row">
                <span>Had Nisab Minimum:</span> <strong>${formatRM(nisabValue)}</strong>
            </div>
            <div class="receipt-row">
                <span>Kadar Zakat:</span> <strong>2.5%</strong>
            </div>
            <div class="receipt-row total">
                <span>Jumlah Zakat Wajib Dibayar:</span> <strong>${formatRM(zakatValue)}</strong>
            </div>
        `;
    } else {
        resultBox.innerHTML = `
            <div class="receipt-error-body">
                <strong><i class="fi fi-rr-cross-circle"></i> Tidak Wajib Zakat</strong>
                <p>Nilai bersih harta anda (<strong>${formatRM(netValue)}</strong>) tidak melepasi had Nisab minimum semasa (<strong>${formatRM(nisabValue)}</strong>) atau syarat haul belum dipenuhi.</p>
            </div>
        `;
    }
    resultBox.classList.add('show');
}

// Logik untuk semua borang
document.querySelectorAll('.calc-form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault(); // Elak page reload
        
        // Ambil data dari borang yang dihantar
        const formData = new FormData(form);
        const calcType = form.dataset.calc;
        const resultBox = form.querySelector('.result');
        
        let net = 0;
        let zakat = 0;
        let isWajib = false;
        let nisab = 0;

        // Semak jenis kalkulator dan buat pengiraan
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
            nisab = 85 * harga; // Nisab emas = 85 gram darab harga semasa
            isWajib = berat >= 85; 
            
        } else if (calcType === 'savings') {
            const baki = parseFloat(formData.get('baki')) || 0;
            nisab = parseFloat(formData.get('nisab')) || 0;
            
            net = baki;
            isWajib = net >= nisab;
        }

        // Kira 2.5% jika wajib
        if (isWajib && net > 0) {
            zakat = net * 0.025;
        }

        // Panggil fungsi penjana resit
        generateReceipt(resultBox, isWajib, net, zakat, nisab);
    });

    // Reset / Padam logik (Rule 6 Shneiderman)
    form.addEventListener('reset', () => {
        const resultBox = form.querySelector('.result');
        resultBox.classList.remove('show');
        resultBox.innerHTML = '';
    });
});

/* Initialize */
showPage('home');