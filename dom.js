function kirimData() {
    var name = document.getElementById("nama").value
    var Tanggal = document.getElementById("date").value
    var tempat = document.getElementById("tempat").value
    var tiket = document.querySelector("input[name=tiket]:checked").value
    var jumlah = document.getElementById("jumlah").value
    var lagu = document.getElementById("lagu").value

    alert(
        "Nama                : " + name +
        "\nTanggal           : " + Tanggal +
        "\nTempat Konser     : " + tempat +
        "\nHarga Tiket       : " + tiket + 
        "\nJumlah Tiket      : " + jumlah +
        "\nFavorit Lagu      : " +  lagu
    )
}