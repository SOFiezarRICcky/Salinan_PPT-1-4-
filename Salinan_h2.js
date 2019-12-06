// TENTANG FUNCTION


var http = require('http')

function PanggilAku() {
    var hasil = "Aku Adalah Putra Zeus"
    return hasil;
}

var server = http.createServer(function (req, res) {
    var nama = "Sun of Zeus"
    res.end(PanggilAku())
})

server.listen(3000)

console.log("Server Berjalan pada Server 3000");
