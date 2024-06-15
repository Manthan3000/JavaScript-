// //DOM MANIPULATION

// //GET ELEMENT BY ID #

// let ids = document.getElementById("id"); //H1
// console.dir(ids);

// //GET ELEMENT BY CLASS .

// let classs = document.getElementsByClassName("class");
// console.dir(classs);

// //GET ELEMENT BY TAG

// let tag = document.getElementsByTagName("p");
// console.dir(tag);

// //QUERY SELECTOR

// //1st element quary selector
// let firstEL = document.querySelector("p"); //1st element
// console.dir(firstEL);

// //all elemant quary selector
// let allEL = document.querySelectorAll("p"); //ALL ELEMENTS
// console.log(allEL);

// //DOM TREE

// //let div = document.querySelector("div")
// //console.dir(div)

// //PRACTICE QUESTIONS

// //1 . CREATE A H2 HEADING ELEMENT WINT TEXT - "HELLOW JAVASCRIPT" APPEND FROM "APNA COLLEGE STUDENTS" TO THIS TEXT USING JS

// let h2 = document.querySelector("h2");
// console.log(h2.innerText);

// h2.innerText = h2.innerText + "FROME APNA COLLEGE STUDENTS";

// // 2 create 3 divs wits common class name "box" access them & add some unique value of them

// let divs = document.querySelectorAll(".box");

// //METHODE 1

// let idx = 1;
// for (div of divs) {
//   div.innerText = `new unique value ${idx}`;
//   idx++;
// }

// //METHODE 2

// console.log(divs[0]);
// divs[0].innerText = "NEW VALUE 1";
// divs[1].innerText = "NEW VALUE 2";
// divs[2].innerText = "NEW VALUE 3";
