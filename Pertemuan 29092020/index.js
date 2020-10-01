//Arrow Function

//single argument
/*const calcAge =  (year) => {
    return 2020 - year;
}
console.log(calcAge(1996));*/

//multiple argumeent
/*const calcAge =  (birthYear, currentYear) => {
    return currentYear - birthYear;
}
console.log(calcAge(1996,2020));*/

//No argument
/*const calcAge = () => {
    return 2020 - 1992;
};

console.log(calcAge());*/

//No Argument With Implicit Return Value
/*const calcAge = () => 2020 - 1992;

console.log(calcAge());*/

//Contoh tanpa menggunakan arrow func

/*const years = [1990, 1992, 2001, 2005];

const calcAgeES5 = years.map(function (el){
    return 2020 - el;
})

console.log(calcAgeES5);*/

//Contoh menggunakan arrow func

/*const calcAgeES6 = years.map((el) => 2020 - el);

console.log(calcAgeES6);*/

// Default Parameter

/*const calcAge = (birthYear, currentYear = 2020) => currentYear - birthYear;

console.log(calcAge(1991,2021))*/

//EXERCISE ! CONVERT INTO ES6
/*function yearUntilRetirement(year, firstName){
    var age = 28;
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName +  " retired in " + retirement + " years");
    } else { 
        console.log(firstName + " is already retired.")
    }
}*/

//EXERCISE ANSWER
const yearUntilRetirement = (birthYear=1996, currentYear = 2020, firstName) => {
    let age = currentYear - birthYear;
    let retirement = 65 - age;
    if (retirement > 0){
        console.log(`${firstName} retired in ${retirement} years`);
    }else{
        console.log(`${firstName} is already retired.`);
    }
}

console.log(yearUntilRetirement(1996,2020,"Reinaldo"));