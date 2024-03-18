/* Esempio:
Input: a = 3, b = -1, c = 4, d = -2
Output: maggiore = 4, minore = 2 */

///////////////////////////////


/* a = 3
b = -1
c = 4
d = -2


if ( a>b && a>c && a> d){
  console.log( "max temp = " + a)
}

else if ( c > a && c>b && c>d){
  console.log( "max temp = "+c)
}
else{
  console.log("maxc temp = "+d);
}

 */


//////////////////////////////


let numbers = [3, -1, 4, -2];
// soluzione che utilizza i metodi Math.max e Math.min
console.log("Maggiore = " + Math.max(...numbers));
console.log("Minore = " + Math.min(...numbers));