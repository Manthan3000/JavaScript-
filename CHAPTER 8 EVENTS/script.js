let btn1 = document.querySelector("#btn1 ")

// btn1.onclick = (e) => {
//     console.log(e)
// }

// let div = document.querySelector("div")
// div.onmouseover = (evt) => {
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX, evt.clientY)
// }

// btn1.addEventListener ("click" , (evt) => {
//     console.log("btn1 was clicked")
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.clientX, evt.clientY)
// })

// btn1.addEventListener ("click" , () => {
//     console.log("btn1 was clicked -- handler 2")
// })

//PRACTICE QUESTION CREATE DARK AND LIGHT MODE

let modebtn = document.querySelector('#mode') ;
let currmode = "light" ; //change dark

modebtn.addEventListener("Click" , () => {
    if (currmode === "light") {
        currmode = "dark"
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currmode = "light"
        document.querySelector("body").style.backgroundColor = "white"
    }
    console.log(currmode)
})