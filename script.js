var nama = window.prompt("masukkan nama anda");
document.write("halo! selamat datang "+nama +" diwebsite saya");

function home() {
    document.getElementById("demo").innerHTML = "nama saya muhammad alfauzan E";
}
function profil() {
    document.getElementById("demo").innerHTML = "Sy saat ini sebagai staff administrasi di perusahaan dan nomor telepon 0852 9843 2769";
}
function messageus(){
    document.getElementById("demo").innerHTML = "teruslah belajar sampai sukses ";
}
function Ganti() {
	document.getElementById("demo").innerHTML = "Hello World!";
}
function kirim() {
    var nama = document.getElementById("nama").value;
    var tanggallahir = document.getElementById("tanggal lahir").value;
    var gender = document.getElementById("gender").value;
    var pesan = document.getElementById("pesan").value;
    var keluaran = document.getElementById("keluaran");
    keluaran.innerHTML = nama+"<br>"+ tanggallahir +"<br>"+ gender+"<br>"+ pesan;
}




