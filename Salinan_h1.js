var http = require('http');
// Ini Mendeklare bahwasanya kita sedang memakai HTTP


let data_array = [10, 20, 30]

let data_object = {
    'nama': 'Putra Zeus',
    'hobi': 'coding',
    'mantap': 5
}

var server = http.createServer(function (req, res) {
    res.end('Selamat Datang di NodeJS');
    // res.end(Ini Isi yang ingin ditampilkan)
});

server.listen(3000);
// server yang kita pakai yaitu 3000

console.log("Server berjalan di server 3000")
console.log(" ")
// ini untuk menjelaskan di CMD agar jelas port yang dipakai

console.log(data_object)
console.log(" ")
console.log(data_array);
console.log(" ")
// untuk menampilkan semua isi data nya



console.log(data_array[0])
console.log(" ")
// hanya menampilkan data pertama

console.log(data_object.nama)
console.log(" ")
// hanya menampilkan data berupa nama

let JSON_data = JSON.stringify(data_object)
// JSON.stringify ada fungsi untuk mengubah tipe data object menjadi JSON
console.log(JSON_data);
