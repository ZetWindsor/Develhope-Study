const cars = [{
  Brand: "Fiat",
  Model: "Panda",
  year: 2000
},
{
  Brand: "Lancia",
  Model: "Y",
  year: 2010
},

{
  Brand: "KIA",
  Model: "Sportage",
  year: 2018
}
]



function brandModel(){
 let newArray = []

 for( i= 0; i<cars.length; i++){
  if( cars[i].year > 2000 ){
     newArray.push( cars[i])
  }
 }
 for( i=0; i < newArray.length; i++){
  console.log( newArray[i].Brand + "--" + newArray[i].Model)
 }


}

brandModel()