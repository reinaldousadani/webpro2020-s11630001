// Contoh  condition dan Looping

// Menentukan apabila suatu string itu palindrom
function palindrom(kata){
    let jumlahHuruf = kata.length
    let j = jumlahHuruf - 1
    console.log(kata)
    console.log(jumlahHuruf)
    for(let i = 0; i < jumlahHuruf; i++){
        console.log(kata[i])
        console.log(kata[j])
        if(kata[i] != kata[j]){
            return "TIDAK PALINDROM"
        }else{
            j--
        }
    }
    return "PALINDROM"
}    

console.log(palindrom("malam"))