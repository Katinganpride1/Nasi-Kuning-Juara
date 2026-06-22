/* =========================================
   JS INTERAKSI - DYNAMIC CRYSTAL EDITION
========================================= */
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, 
        once: true,
        offset: 50
    });
});

// Logika Pop-up Sukses Pesanan (Menggantikan Alert Biasa)
function validasiForm(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    let menuUtama = document.querySelector('select[name="menu_utama"]').value;
    
    if (menuUtama === "") {
        // Jika gagal, fokuskan ke input menu
        document.querySelector('select[name="menu_utama"]').focus();
        return false;
    }
    
    // Jika berhasil, tampilkan Modal Sukses
    var successModal = new bootstrap.Modal(document.getElementById('modalSuksesPesanan'));
    successModal.show();
    
    // Reset form setelah sukses
    document.getElementById("formPesanan").reset();
    
    return true;
}