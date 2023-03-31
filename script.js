// Soal Nomor 1 : 
for (var i = 1; i <= 100; i++) {
    console.log("User ke - " + i);
}
// Soal Nomor 2: 
var nilaiAwal = 0;
var jumlahPengulangan = 10;

for (var i = 0; i < jumlahPengulangan; i++) {
  nilaiAwal += 2;
  console.log("Nilai saat ini: " + nilaiAwal);
}

// Soal Nomor 3:
  var jumlahKlikOK = 0;

  while (true) {
    var konfirmasi = confirm("Apakah anda mau mengulang?");
    if (konfirmasi === true) {
      jumlahKlikOK++;
    } else {
      console.log("Perulangan sudah dilakukan sebanyak " + jumlahKlikOK + " kali.");
      break;
    }
  }
