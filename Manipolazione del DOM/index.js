const $input = document.querySelector('input');
const $ul = document.querySelector('ul')


document.addEventListener('DOMContentLoaded', () => {
  // Carica i dati da sessionStorage
  const savedProduct = sessionStorage.getItem('product');

  if (savedProduct) {
    const $ul = document.querySelector('ul');
    const $li = document.createElement('li');
    
    // Ripristina il valore nel campo input
    const $input = document.querySelector('input');
   ;

    // Crea un elemento li e assegna il valore al suo testo
    $li.innerText = savedProduct;

    // Aggiungi l'elemento li all'ul
    $ul.appendChild($li);
  }
});



const addProduct = () => {
  const $li = document.createElement('li');

  const $check = document.createElement('input');



  if ($input.value != "") {

    sessionStorage.setItem(...'product', $input.value);

    $li.innerText = $input.value;

    $ul.appendChild($li);

    $input.value = "";


  } else {

    $input.placeholder = "aggiungi qualcosa"

  }



};


/*  const $input = document.querySelector('input');
const $ul = document.querySelector('ul');

const addProduct = () => {
  const $li = document.createElement('li');
  const $check = document.createElement('input');

  if ($input.value !== "") {
    // Save the input value to sessionStorage
    sessionStorage.setItem('product', $input.value);

    // Create a list item and set its text content
    $li.innerText = $input.value;

    // Append the list item to the unordered list
    $ul.appendChild($li);

    // Clear the input field
    $input.value = "";
  } else {
    // If the input is empty, provide a placeholder message
    $input.placeholder = "aggiungi qualcosa";
  }
};
 */