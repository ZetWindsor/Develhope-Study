let primitive = true
//let primitive = 50
//let primitive = "ciao"

/* if( typeof primitive === 'string'){
  console.log('primitve is a string')
}
else if ( typeof primitive === 'boolean'){
  console.log("primitive is a boolean")
}
else if( typeof primitive === "number"){
  console.log("primitive is a number")
}

else(console.log('non studiata')) */


switch (typeof primitive) {
  case "string":
    console.log("primitive is a string")
    break

  case "boolean":
    console.log("primitive is a boolean")
    break

  case "number":
    console.log("primitive is a number")
    break

  default:
    console.log(" non studiata")
    break
}