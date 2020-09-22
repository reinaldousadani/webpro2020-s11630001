//var let dan const



//scope dalam JS
//1. function scope (var)
//2. block scope
/*(function tes() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
})()
console.log(i)*/


//template literal
const person = {
    firstName: "Stenly",
    lastName: "Adam",
    age: 33,
}

console.log(
    `Hallo nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun`
)