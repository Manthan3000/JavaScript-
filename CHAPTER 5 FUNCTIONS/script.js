console.log("hyy");
//.log(input) is example of function

//FUNCTION DEFINATION

function myfun(params) {
  console.log("welocome to functions");
  console.log("welocome to functions");
}

myfun(); //CALL BACK

function fun(msg) {
  //parameter-input var
  console.log(msg * 2);
}

fun("ilovejs", 100); //ARUGUMENT

//function 2 num ,sum

function sum(a, b) {
  // (x,y local var)
  s = a + b;
  console.log("before return");
  return s;
  console.log("un reach able because of return");
}
let val = sum(10, 20);
console.log(val);

//ARROW FUNCTION
//arrow addition
const arrsum = (a, b) => {
  console.log(a + b);
};
//arrow multiplication
const arrmul = (x, y) => {
  return x * y;
};

let printmanthan = () => {
  console.log("manthan");
};

//PRACTICE QUESTIONS

// 1. return no.of vowles in string
function countvowles(str) {
  let count = 0;

  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
// 2. return no. of vowles in string by arrow methode
const countvow = (str) => {
  let count = 0;

  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

//for each loop only for arrays
//higher order function

let arr = [1, 2, 3, 4, 5];

arr.forEach((val, idx, arr) => {
  console.log(val, idx);
});

// practice question
// 1. print square

let num = [1, 2, 3, 4, 5, 6];

num.forEach((num) => {
  console.log(num * num);
});

//array methode

//map methode

let nums = [9, 8, 7, 6, 5, 4, 3];

let newarray = nums.map((val) => {
  return val * val;
});

console.log(newarray);

// filter methode new array wits filter

let even = [1, 2, 3, 4];

let numbers = even.filter((val) => {
  return val % 2 === 0;
});
console.log(numbers); //

//reduce array methode

let array1 = [1, 2, 3, 4];
const output = array1.reduce((before, after) => {
  return before + after;
});
console.log(output); //10 

//to find largest number in array

let array2 = [11, 100, 300, 130 ,150];
const large = array2.reduce((before, after) => {
  return before > after ? before : after;
});
console.log(large); // 300 

//practice questions 
console.log (" QUESTION 1")

//we are given arr of student marks filter out marks of student > 90 ?

let marks = [ 60,67,56,98,99,88,96] ;

let toppers = marks.filter( (value) => {
  return value > 90
})

console.log( toppers)

console.log (" QUESTION 2")
//2. take no. N from user . create array from 1 to N
let n =  prompt("ENTER THE NUMBER :") 
let no = [] ;

for (let i = 1; i <= n; i++) {
  no[ i - 1 ]= i;
}
console.log (no)
//A.use reduce methode to calculate SUM fo all numbers in array.

let add = no.reduce ( (prev ,curr) => {
  return prev + curr
});
//B.use reduce methode to calculate FACTORIALL fo all numbers in array.

let factorial = no.reduce ( (prev ,curr) => {
  return prev * curr
});

console.log ( "sum = ", add) ;

console.log ( "factorial = ", factorial)