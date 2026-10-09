// // // function getStatus(code){

// // //     if(code>=400 && code<300) return "Success"
// // //     if(code<400 && code<300) return "client error"
// // // }

// // // getStatus(500)

// //  let env="Staggin";

// //  function setupConfig(){
// //     let timeOut=3000;
// //     console.log(env); //access to global 
// //     console.log(timeOut);// local with in {}

// //  }

// // setupConfig()

// function outer(){
//     let x=10;

//     function inner(){
//         let y=20;
//         console.log(x);
//     }
//     inner();
//     console.log(y)

// }

// The inner functions can always outer 
// inner variables cannot access by outer