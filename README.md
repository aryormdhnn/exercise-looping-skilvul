# exercise-looping-skilvul

# Penjelasan Untuk nomor 1
for (var i = 1; i <= 100; i++) {
    console.log("User ke - " + i);
}


Pada setiap perulangan, variabel i akan diberikan nilai baru yang dimulai dari 1 hingga mencapai 100. Kemudian, sebuah teks string "User ke - " akan dicetak ke konsol diikuti dengan nilai i yang sedang diproses pada perulangan tersebut.

Jadi, pada setiap perulangan, akan dicetak teks "User ke - " diikuti dengan nomor urut pengguna mulai dari 1 hingga 100.


# Penjelasan Untuk Nomor 2

var nilaiAwal = 0;
var jumlahPengulangan = 10;

for (var i = 0; i < jumlahPengulangan; i++) {
  nilaiAwal += 2;
  console.log("Nilai saat ini: " + nilaiAwal);
}


var nilaiAwal = 0;: Mendefinisikan variabel nilaiAwal dengan nilai awal 0.
var jumlahPengulangan = 10;: Mendefinisikan variabel jumlahPengulangan dengan nilai 10 yang akan menjadi batas maksimum pengulangan.
for (var i = 0; i < jumlahPengulangan; i++) {: Memulai loop for dengan variabel penghitung i yang dimulai dari nilai 0 dan akan terus di-increment hingga mencapai nilai jumlahPengulangan-1.
nilaiAwal += 2;: Setiap kali loop dieksekusi, nilai variabel nilaiAwal akan di-increment sebesar 2.
console.log("Nilai saat ini: " + nilaiAwal);: Menampilkan output ke konsol yang berisi teks "Nilai saat ini: " dan nilai terbaru dari variabel nilaiAwal.
}: Menutup loop for.
