// // //DATA BASE TAKE TIME TO TAKE DATA AFTER 2 SEC USING PROMIS CHANNING

// function getdata(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data = ", dataId);
//       resolve("success...");
//     }, 2000);
//   });
// }

// // METHODE 1 : CALLBACK HELL
// console.log("Finding DATA 1 .....by callback");
// getdata(1).then((res) => {
//   console.log(res);
//   console.log("Finding DATA 2 .....by callback");
//   getdata(2).then((res) => {
//     console.log(res);
//     console.log("Finding DATA 3 .....by callback");
//     getdata(3).then((res) => {
//       console.log(res);
//       console.log("Finding DATA 4 .....by callback");
//       getdata(4).then((res) => {
//         console.log(res);
//         console.log("Finding DATA 5 .....by callback");
//         getdata(5).then((res) => {
//           console.log(res);
//         });
//       });
//     });
//   });
// });

// // METHODE 2 PROMISIS CHAIN  .THEN METHODE MEDIUM

// console.log("GETTING DATA 1...by chain");
// getdata(1)
//   .then((res) => {
//     console.log("GETTING DATA 2...by chain");

//     return getdata(2);
//   })
//   .then((res) => {
//     console.log("GETTING DATA 3...by chain");

//     return getdata(3);
//   })
//   .then((res) => {
//     console.log("GETTING DATA 4...by chain");

//     return getdata(4);
//   })
//   .then((res) => {
//     console.log("GETTING DATA 5...by chain");

//     return getdata(5);
//   })
//   .then((res) => {
//     return getdata(res);
//   });

// // METHODE 3   async & await BEST

// async function getalldata() {
//   console.log("getting data 1 ....by async await");
//   await getdata(1);
//   console.log("getting data 2 ....by async await");
//   await getdata(2);
//   console.log("getting data 3 ....by async await");
//   await getdata(3);
//   console.log("getting data 4 ....by async await");
//   await getdata(4);
//   console.log("getting data 5 ....by async await");
//   await getdata(5);
// }
// console.log(getalldata());
