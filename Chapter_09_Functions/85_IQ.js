function getStatus(code){
    if(code>=200 && code <=300) return "Success";
    if (code>=400 && code <=500 ) return "Client Error"

}


console.log(getStatus(201))