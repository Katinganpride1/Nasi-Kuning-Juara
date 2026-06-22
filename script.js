/* =========================================
   JS INTERAKSI - RESPONSIVE & DARK MODE MEMORY
========================================= */
document.addEventListener("DOMContentLoaded", function() {
    // 1. Inisialisasi AOS (Animasi saat di-scroll)
    AOS.init({
        duration: 800, 
        once: true,
        offset: 50
    });

    // 2. LOGIKA DARK MODE DENGAN MEMORI BROWSER (Local Storage)
    const toggleBtn = document.getElementById('darkModeToggle');
    const body = document.body;

    // Cek memori saat halaman baru dibuka (Biar gak keriset saat pindah page)
    if (localStorage.getItem('temaWarung') === 'gelap') {
        body.classList.add('dark-mode');
        if(toggleBtn) toggleBtn.innerHTML = '☀️ Light Mode';
    }

    // Aksi saat tombol Dark Mode ditekan
    if(toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            body.classList.toggle('dark-mode'); // Nyala/matikan mode gelap
            
            // Simpan pilihan ke memori browser & ubah teks tombol
            if(body.classList.contains('dark-mode')) {
                localStorage.setItem('temaWarung', 'gelap'); // Ingat mode gelap
                toggleBtn.innerHTML = '☀️ Light Mode';
            } else {
                localStorage.setItem('temaWarung', 'terang'); // Ingat mode terang
                toggleBtn.innerHTML = '🌙 Dark Mode';
            }
        });
    }
});

// 3. Validasi Form Pemesanan (Halaman pesan.html)
function validasiForm(event) {
    event.preventDefault(); // Mencegah halaman ke-refresh
    
    let menuUtama = document.querySelector('select[name="menu_utama"]').value;
    
    // Kalau menu belum dipilih
    if (menuUtama === "") {
        document.querySelector('select[name="menu_utama"]').focus();
        return false;
    }
    
    // Kalau sukses, panggil Pop-up (Modal) Sukses
    var successModal = new bootstrap.Modal(document.getElementById('modalSuksesPesanan'));
    successModal.show();
    
    // Reset isi form setelah pesanan sukses
    document.getElementById("formPesanan").reset();
    
    return true;
}