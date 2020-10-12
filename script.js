// setTimeout()

// const tes = setTimeout(function() {
//     console.log('ok')
// }, 5000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
//     clearTimeout(tes);
//     console.log('selesai');
// })

// setInterval()

// const tes = setInterval(function() {
//     console.log('ok')
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
//     clearInterval(tes);
//     console.log('selesai');
// })

//program hitung mundur
const tanggalTujuan = new Date('Jan 1, 2021 00:00:00').getTime();

const hitungMundur = setInterval(function() {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / (1000));

    const teks = document.getElementById('teks');
    text.innerHTML = 'Tahun baru sebentar lagi! <br> ' + hari + ' hari ' + jam + ' jam '
                    + menit + ' menit ' + detik + ' detik';

    if (detik <= 0 & menit <= 0 & jam <= 0 & hari <= 0) {
        clearInterval(hitungMundur);
        text.innerHTML = "SELAMAT TAHUN BARU!";
        }

}, 1000);

console.log(detik)

