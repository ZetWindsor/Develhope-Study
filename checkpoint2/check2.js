const API = 'https://api.publicapis.org/entries'
const $tbody = document.querySelector("#tbody")

const state = {
  data: [],
}

const fetchData = async () => {

  try {
    const response = await fetch(API, { method: "GET" });
    const result = await response.json();

    if (response.ok) {
      state.data = result.entries;
    } else {
      throw new Error(result)
    }
  } catch (error) {
    console.log(error.message);
  }
}

const utility = {
  generateRowHTML: (item) => {
    return `
    <tr>
    <td>${item.API}</td>
    <td>${item.Description}</td>
    <td>${item.Auth}</td>
    <td>${item.HTTPS ? "YES" : "NO"}</td>
    <td>${item.Cors}</td>
    <td> <a href="${item.Link}">${item.API}</a></td>
    <td>${item.Category}</td>
  </tr>
    `
  }
};

const renderData = () => {
  const HTML = state.data.map(item => utility.generateRowHTML(item)).join("");
  $tbody.innerHTML = HTML
};

const init = async () => {
  await fetchData();
  renderData();
}

init()