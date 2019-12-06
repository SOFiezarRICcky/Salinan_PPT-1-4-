var http = require('http')

// function hitung(angka1, angka2) {
//     var hasil = angka1 * angka2
//     var result = `${angka1} + ${angka2} = ${hasil}`
//     return result;
// }// Contoh Penulisan menggunakan function biasa

const hitung = (angka1, angka2) => {
    let hasil = angka1 * angka2
    let result = `${angka1} + ${angka2} = ${hasil}`
    return result
}

const hitung = (angka1, angka2) => angka1 * angka2
// jika satu baris tidak perlu memakai kurung kurawal


const hitung = angka => angka * angka
//jika1 parameter, tidak perlu diberi tanda kurung



var server = http.createServer(function (req, res) {
    var nama = "Putra Zeus";
    res.end(hitung(5, 4))
})

server.listen(3000)

console.log("Server Berjalan di Port 3000");
