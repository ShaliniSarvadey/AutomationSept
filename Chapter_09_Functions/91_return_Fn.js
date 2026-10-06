function getStatus(code) {
 if(code>=200 && code<=300) return "Success message"
 if (code>400 && code <500) return "Client message"
 if (code>=500) return "Server error "
}

console.log(getStatus(300))
