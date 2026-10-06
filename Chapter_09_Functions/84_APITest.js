// function validateStatusCode(status){
//     if(status>=200 && status<=300 ){
//         console.log("Our request is fine")
//     }
// }

// validateStatusCode(200)

// Another way

// const validateStatusCodeExpression = function(status){
//    if(status>=200 && status<=300 ){
//         console.log("Our request is fine")    }
//  }


 //Another way

 const validateStatusCodeArrow = (status) => {
    if(status >= 200 && status <= 300) {
       console.log("Our request is fine");
    }
 }

 validateStatusCodeArrow(200);