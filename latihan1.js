var menu = [
  {
    nama: "nasi goreng",
    harga: 17000,
    pesan: false
  },
  {
    nama: "rawon",
    harga: 20000,
    pesan: false
  },
  {
    nama: "sate padang",
    harga: 15000,
    pesan: false
  }
];

var totalHarga = 0;

function jumlahHarga(namaMakanan) {
  var hargaMakanan;
  return totalHarga += hargaMakanan;
}

function pesan(namaMenu, callback) {
  callback(namaMenu);
  console.log("Anda memesan " + namaMenu);
  console.log("total harga adalah " + totalHarga);
}

pesan("rawon", jumlahHarga);
