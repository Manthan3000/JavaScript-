const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// //ASYNC & AWAITE METHODE 1

const getfacts = async () => {
  console.log("getting data ....");
  let responce = await fetch(URL);
  console.log(responce); //json format ... / AJAJ
  let data = await responce.json();
  fact.innerText = data[4].text;
};

// // FUNCTION CHAIN  .THEN METHODE 2
// function getfacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       fact.innerText = data[3].text;
//     });
// }
btn.addEventListener("click", getfacts);
