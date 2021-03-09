$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // offset, mendapatkan jarak elemen window ke section portfolio
    if (wScroll > $('.figures').offset().top - 250) {

        // menangkap semua elemen pada thumbnail, lalu berikan fungsi pada tiap tiap elemen nya
        $('.figures .figure').each(function (i) {
            // menjalankan fungsi setTimeOut untuk menunggu waktu muncul nya
            setTimeout(function () {
                // eq adalah equal,artinya mau pilih elemen yang mana
                $('.figures .figure').eq(i).addClass('muncul');
            }, 300 * (i + 1));
            // 300 adalah waktu kecepatan, 300 = 0,3s
            // i adalah indeks, untuk mengetahui elemen mana yang mau ditambahkan class muncul 

        });
    }
});