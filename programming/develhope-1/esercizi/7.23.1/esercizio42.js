function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

let cell1 = new Smartphone("oppo", "reno", 360);
let cell2 = new Smartphone("samsung", "galaxy2", 600);
let cell3 = new Smartphone("apple", "Iphone X", 1000);
let cell4 = new Smartphone("motorola", "m20", 200);
console.log(cell1);
console.log(cell2);
console.log(cell3);
console.log(cell4);

if (cell1.price < cell2.price && cell1.price < cell3.price && cell1.price<cell4.price) {
  console.log("sei povero")
}

else {
  console.log("hai i soldi")}