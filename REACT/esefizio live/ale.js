function formatCarInfo(cars) {
  return cars.map(function(car) {
    return car.brand + ' ' + car.model;
  });
}

const cars = [
  { brand: 'Toyota', model: 'Camry', year: 2020 },
  { brand: 'Honda', model: 'Civic', year: 2019 },
  { brand: 'Ford', model: 'Focus', year: 2021 }
];

const formattedCarInfo = formatCarInfo(cars);
console.log(formattedCarInfo);
