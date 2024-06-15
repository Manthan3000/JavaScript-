// //                ASYNC AWAIT

// async function hello() {
//   console.log("hello"); //TO RETURNN PROMISE
// }

// //

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("WEATHERE DATA:"); //PENDING PROMISE
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getweatherdata() {
//   await api(); //FULLFILED PROMISE 1ST
//   await api(); //FULLFILED PROMISE 2ND
// }

// //DATA BASE TAKE TIME TO TAKE DATA AFTER 2 SEC USING PROMIS CHANNING

// function getdata(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data = ", dataId);
//       resolve("success...");
//     }, 2000);
//   });
// }

// //      async & await
// async function getalldata() {
//   console.log("getting data 1 ....");
//   await getdata(1);
//   console.log("getting data 2 ....");
//   await getdata(2);
//   console.log("getting data 3 ....");
//   await getdata(3);
//   console.log("getting data 4 ....");
//   await getdata(4);
//   console.log("getting data 5 ....");
//   await getdata(5);
// }
// console.log(getalldata());

// // IIFE another methode (....)()
// (async function getalldata() {
//   console.log("getting data 1 ....");
//   await getdata(1);
//   console.log("getting data 2 ....");
//   await getdata(2);
//   console.log("getting data 3 ....");
//   await getdata(3);
//   console.log("getting data 4 ....");
//   await getdata(4);
//   console.log("getting data 5 ....");
//   await getdata(5);
// })();
