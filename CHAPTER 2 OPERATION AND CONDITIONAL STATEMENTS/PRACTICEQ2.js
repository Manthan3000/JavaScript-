
//PRACTICE QUESTION 1 

// let num = prompt("enter a number") ;

// if (num % 5 === 0) {
//     console.log (num ,"number is multiple of 5")
// } else {
//     console.log (num ,"number is not multiple of 5")
// }


//PRACTICE QUESTION 2


let MARKS = prompt("ENTER A MARKS (0-100):") ;

if (MARKS >= 90 && MARKS<=100 ) {
    console.log (MARKS," YOU HAVE A GRADE ")
} else if (MARKS >= 70 && MARKS<=89) {
    console.log ( MARKS, "YOU HAVE B GRADE")
} else if (MARKS >= 60 && MARKS<=69) {
    console.log ( MARKS, "YOU HAVE C GRADE")
} else if (MARKS >= 50 && MARKS<=59) {
    console.log ( MARKS, "YOU HAVE D GRADE")
} else if (MARKS >= 35 && MARKS<=50) {
    console.log ( MARKS, "YOU HAVE E GRADE")
} else if (MARKS >= 0 && MARKS<=35)  {
    console.log ( MARKS, "YOU ARE FAILLED!")
}