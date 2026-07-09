# 🎓 Persediaan Soalan & Jawapan (Q&A) Pembentangan eZakat (ITT588)

Fail ini disediakan khas sebagai panduan rujukan pantas sekiranya pensyarah ("Madam") anda bertanyakan soalan semasa sesi demonstrasi dan pembentangan projek eZakat.

---

## 🎯 Bahagian 1: Kebolehcapaian & Rabun Warna (Deuteranomaly)

### ❓ Soalan 1: Mengapa anda memilih kategori rabun warna "Deuteranomaly" dan apakah maksudnya?
*   **Jawapan:** 
    *   **Deuteranomaly** ialah sejenis rabun warna merah-hijau yang paling lazim berlaku (menjejaskan sekitar 4.6% populasi lelaki). Pengguna dalam kategori ini menghadapi kesukaran membezakan tona warna merah dan hijau kerana sel kon hijau dalam mata mereka tidak berfungsi secara normal.
    *   Dalam reka bentuk web biasa, warna **Hijau** (Wajib/Berjaya) dan **Merah** (Tidak Wajib/Ralat) sering digunakan. Bagi mengehadkan kekeliruan pengguna Deuteranomaly, kami membina fungsi **Theme Toggle** khusus untuk menukar palet warna ini.

### ❓ Soalan 2: Bagaimanakah fungsi mod rabun warna ini diimplementasikan dalam kod anda?
*   **Jawapan:** Kami menggunakan gabungan **HTML (Toggle Switch)**, **CSS Variables**, dan **JavaScript (DOM Manipulation)**.
    1.  **CSS Variables ([styles.css:L29-44](file:///c:/Users/aizam/.gemini/antigravity/scratch/eZakat-ITT588/styles.css#L29-L44)):** Kami mentakrifkan tema khusus `.theme-cb` yang menggantikan warna hijau dan merah kepada palet warna selamat (biru kontras tinggi untuk status utama, kuning untuk penyerlah, dan merah jambu/rose untuk bahaya/ralat).
    2.  **JavaScript ([script.js:L22-34](file:///c:/Users/aizam/.gemini/antigravity/scratch/eZakat-ITT588/script.js#L22-L34)):** JavaScript mendengar perubahan pada suis togol. Jika diaktifkan, kelas `.theme-cb` dimasukkan ke dalam tag `<body>` dan pilihan disimpan dalam `localStorage` supaya tema kekal aktif walaupun halaman dimuat semula.

---

## ⚡ Bahagian 2: Aplikasi Shneiderman's 8 Golden Rules

### ❓ Soalan 3: Bagaimanakah anda mengaplikasikan Shneiderman's Eight Golden Rules dalam projek eZakat ini?
*   **Jawapan:** Kami mematuhi kesemua 8 peraturan utama seperti berikut:
    1.  **Strive for consistency (Konsistensi):** Kad kalkulator (`.calc-card`), ruang input nombor, dan gaya butang adalah seragam di semua seksyen.
    2.  **Cater to universal usability (Kebolehcapaian Sejagat):** Penyediaan mod rabun warna Deuteranomaly dan responsif terhadap peranti mudah alih (mobile-first CSS).
    3.  **Offer informative feedback (Maklum Balas Terus):** Selepas butang "Hitung Zakat" ditekan, sistem memaparkan resit pengiraan terperinci dengan warna yang menunjukkan status wajib atau tidak wajib secara jelas.
    4.  **Design dialogs to yield closure (Reka Dialog Menghasilkan Penutup):** Urutan pengiraan selesai dan ditutup dengan paparan resit rumusan telus (tiada langkah tambahan yang mengelirukan).
    5.  **Prevent errors (Pencegahan Ralat):** Input menggunakan atribut `type="number"`, `min="0"`, dan `required` untuk menghalang kemasukan nilai negatif, teks kosong, atau simbol bukan nombor. Checkbox "Cukup Haul" wajib ditanda.
    6.  **Permit easy reversal of actions (Patah Balik Mudah):** Setiap kalkulator disediakan butang "Padam" (Reset) untuk memadam input dan menyembunyikan resit keputusan serta-merta tanpa perlu memadam secara manual satu demi satu.
    7.  **Support internal locus of control (Pengguna Pegang Kawalan):** Menggunakan menu navigasi terapung (*Sticky Header*) supaya pengguna bebas bergerak ke halaman lain pada bila-bila masa tanpa rasa sesat.
    8.  **Reduce short-term memory load (Kurangkan Beban Memori):** Nilai nisab semasa diisi secara automatik (RM 24,000) dan formula dipaparkan terus berdekatan input, maka pengguna tidak perlu menghafal nilai atau formula tersebut.

---

## 🧮 Bahagian 3: Logik Syariah & Teknikal Kalkulator

### ❓ Soalan 4: Bagaimanakah pengiraan zakat dilakukan bagi setiap modul?
*   **Jawapan:** Kadar tetap zakat adalah **2.5%** daripada jumlah harta bersih yang melepasi nisab dan cukup haul.
    *   **Perniagaan:** `(Aset - Hutang Jangka Pendek) * 2.5%` jika $\ge$ Nisab.
    *   **Pendapatan:** `(Pendapatan Kasar - Perbelanjaan Asas) * 2.5%` jika $\ge$ Nisab.
    *   **Emas Simpanan:** `(Berat * Harga Emas Semasa) * 2.5%` jika berat $\ge 85\text{g}$ Nisab emas.
    *   **Wang Simpanan:** `Baki Terendah * 2.5%` jika $\ge$ Nisab.

### ❓ Soalan 5: Mengapa kotak semak (checkbox) "Cukup Haul" diwajibkan (required)?
*   **Jawapan:** Mengikut hukum syarak, zakat harta hanya wajib dikeluarkan apabila harta tersebut telah berada dalam pemilikan genap setahun hijrah/syamsiah (Cukup Haul). Sekiranya syarat haul tidak dipenuhi, zakat tidak wajib dibayar. Kami mewajibkan tanda raket ini sebagai benteng pencegahan ralat hukum (Rule 5 Shneiderman) sebelum pengiraan matematik dilakukan.

---

## 🎨 Bahagian 4: Justifikasi Reka Bentuk UI/UX

### ❓ Soalan 6: Mengapa anda memilih reka bentuk Single Page Application (SPA)?
*   **Jawapan:** Reka bentuk SPA membolehkan navigasi berlaku dengan serta-merta tanpa memuat semula (reload) laman web. Ini meningkatkan kecekapan aplikasi, memberikan pengalaman pengguna yang sangat lancar (*fluid UX*), dan menjimatkan data internet.

### ❓ Soalan 7: Apakah keistimewaan tipografi dan reka bentuk visual yang digunakan?
*   **Jawapan:** 
    *   Kami menggunakan font kontemporari **Plus Jakarta Sans** untuk tajuk bagi memberikan imej korporat yang kemas, dan font **Geist** untuk teks biasa dan nilai nombor bagi memudahkan pembacaan nombor kewangan yang rapat.
    *   Kami menggunakan **Double Bezel Design** pada kad (`.calc-card` & `.calc-inner`) dengan bayang-bayang halus (*subtle shadows*) dan animasi peralihan CSS (`cubic-bezier` spring easing) untuk memberikan sentuhan moden, hidup, dan premium.
