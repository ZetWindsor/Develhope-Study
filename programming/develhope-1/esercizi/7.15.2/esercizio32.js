/* function sayHelloName(callback) {

  setTimeout(function () {


    console.log("hello ");

    callback();
  }, 2000) // 2 secondi 

}





function printName() {

  console.log("emilio")
}


sayHelloName(printName); */


function sayHelloName(callback) {


  console.log("hello ");

  callback();
} /* 2 secondi */






function printName() {

  console.log("emilio")
}

setTimeout(function () { sayHelloName(printName); }, 2000)





