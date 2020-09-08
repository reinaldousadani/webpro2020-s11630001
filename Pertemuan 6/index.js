// Object

// Mendeklarasikan object

const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    ipSemester: [3.05, 3.25, 3.00, 3.4],
    //function inside object is using function expression
    hitungIpk: function() {
        let total = 0;
        this.ipSemester.forEach(function (el) {
            total = total + el
        });
        return total / 4
    }
}


// Mengakses objek
console.log(mhs1.alamat)
console.log(mhs1.ipSemester[2])
console.log(mhs1.hitungIpk())