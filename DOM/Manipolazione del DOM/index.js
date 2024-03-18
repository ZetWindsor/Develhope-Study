const $ul = document.querySelector("ul");
const $inputTest = document.querySelector("input")

const state = {
  taskList: "",
}

$inputTest.addEventListener("input",(event) => {
  state.taskList = event.target.value
})

const addProduct = () => {
  if (state.taskList !== "") {
    const newList = document.createElement("li");
    newList.innerHTML =
      `
      <input type="checkbox" color="red"/>
      <label>${state.taskList}<label/>
      `;
    $ul.appendChild(newList);
    $inputTest.value = "";
    state.taskList = "";//cosi quando riclicco su ggiungi non mi stampa la cosa messa precedentemente
  }
}