// //      ASSIC AWAIT

// //     ASSIC PROGARAM DOSENT BLOCK FLOW
// console.log("one"); //IT PRINT

// function hellow() {
//   console.log("hyyy");
// }
// setTimeout(hellow, 1000); // After 1 sec it show hyy

// console.log("two"); //NOT wait for 1 SEC

// //          CALL BACK

// function sum(a, b) {
//   console.log(a + b);
// }
// //  call back
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(3, 4, sum); //7  notice do not use sum()

// //     CALL BACK HELL (NESTEING)

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 1; j < 5; j++) {
//     str += j;
//   }
//   console.log(i, str);
// }

// // //DATA BASE TAKE TIME TO TAKE DATA AFTER 2 SEC
// function getdata(dataId, getnextdata) {
//   setTimeout(() => {
//     console.log("data = ", dataId);
//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 2000);
// }
//getdata(45) // O/P = 45 after 2 sec

// //THIS IS CALLBACKKK HELL(REDABLATY LOW)
// //NESTIED CALL BACK BAD PROGARM THATSWHY ITS CALL BACK HELL

// getdata(1, () => {
//   console.log("Getting Data 2...");
//   getdata(2, () => {
//     console.log("Getting Data 3...");
//     getdata(3, () => {
//       console.log("Getting Data 4...");
//       getdata(4, () => {
//         console.log("Getting Data 5...");
//         getdata(5);
//         console.log("FOUND DATA 5>");
//       });
//     });
//   });
// });

// // TO SOLVE CALL BACKHELL WE HAVE "PROMISIS"
//              PROMISIS
// // it is an object & pending , resolve , reject

// let promise = new Promise((resolve, reject) => {
//   console.log("i am promise");
//   resolve("solveddd");
// });

// //PROMISE RETURN

// function getdata(dataId, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data = ", dataId); //PROMISE =PENDING UNDEFINED BEFORE 5 SEC
//       // resolve("SUCCESS"); // PROMISE =  RESOLVE FULFILED AFTER 5 SEC
//       reject("DFGH");
//       if (getnextdata) {
//         getnextdata();
//       }
//     }, 5000);
//   });
// }

// //  .THEN & .CATCHH METHODESS

// const GetPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am proo");
//     resolve("DONE");
//     // reject("errror !!!!");
//   });
// };

// let promise = GetPromise();
// promise.then(() => {
//   console.log("PROMIS FULL");
// });

// //CHANNINGG

// function asyncfunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("DATA 1");
//       resolve("success");
//     }, 5000);
//   });
// }

// function asyncfunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("DATA 2");
//       resolve("success");
//     }, 5000);
//   });
// }
// //PROMISIS CHAINING

// console.log("FERCHING DATA 1 .....");
// asyncfunction1().then((res) => {
//   console.log("FERCHING DATA 2 .....");
//   asyncfunction2().then((res) => {});
// });
//

//  EXAMPLEEE

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
