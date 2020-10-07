// Destrukturisasi Array

// // Cara tidak efisien
// let buah = ["mangga", "pisang", "anggur"]

// let buah1 = buah[0]
// let buah2 = buah[1]
// let buah3 = buah[2]

// console.log(buah1)
// console.log(buah2)
// console.log(buah3)

// // cara mendeklarasikan variabel berupa array
// let namaArray = [element1, element2, element3];

// // cara melakukan destrukturisasi array
// let [variabel1, variabel2, variabel3] = namaArray;

// Contoh Destrukturisasi Array
// let buah = ["mangga", "pisang", "anggur"]
// let [buah1, buah2, buah3] = buah
// console.log(buah1)
// console.log(buah2)
// console.log(buah3)

// Contoh melewati element menggunakan koma kosong
// let [namaDepan,,namaBelakang,,buku] = ["Joanne", "K", "Rowling", "Pengarang", "Harry Potter"]
// console.log(namaDepan)
// console.log(namaBelakang)
// console.log(buku)

// Contoh Menukar Nilai Variabel
// Contoh tidak efisien
// let a=10
// let b=15

// let temp = a
// a = b
// b = temp

// // Contoh menggunakan destrukturisasi array
// let a = 10
// let b = 15
// [a,b] = [b,a]


// Destrukturisasi Objek
// Contoh Tidak Efisien
// let orang = {
//     nama: "Joko",
//     umur: 18,
//     sudahMenikah: false
// }

// let nama = orang.nama
// let umur = orang.umur
// let sudahMenikah = orang.sudahMenikah

// console.log(nama)
// console.log(umur)
// console.log(sudahMenikah)

//Contoh Efisien
// let orang = {
//     nama: "Joko",
//     umur: 22,
//     sudahMenikah: false
// }

// // Destrukturisasi objek
// let {nama, umur, statusMenikah} = orang
// console.log(nama)
// console.log(umur)
// console.log(statusMenikah)

// // Contoh agar nama variabel berbeda dari nama properti
// let orang = {
//     name: "Joko",
//     age: 22
// }

// // buat variable nama berisi nilai dari properti name pada orang
// // buat variable age berisi nilai dari properti umur pada orang

// let {name: nama, age: umur} = orang
// console.log(nama)
// console.log(umur)

// Destrukturisasi Objek Bertingkat
let murid = {
    kelas : "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
        olahraga: "Juara 1",
        akademik: "Juara 2"
    }
}

let{
    prestasi: {olahraga}
} = murid

console.log(olahraga)