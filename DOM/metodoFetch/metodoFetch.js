const LOTR = 'https://ringsdb.com/api/public/card/01001.json?_format=json'


async function fetchData() {
  try {
    const response = await fetch(LOTR);
    const data = await response.json()
    console.log(data);

    const nameLOTR = data.name
    const imgLOTR = "https://ringsdb.com/"+data.imagesrc

    const h1 = document.querySelector('.nome');
    const image = document.querySelector('.picture');
    console.log(nameLOTR);

    h1.textContent = nameLOTR;
    image.setAttribute('src', imgLOTR) 

  } catch (error) {
    console.log(error);
  }

}

fetchData()