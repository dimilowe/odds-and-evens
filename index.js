//const { createElement } = require("react");

// === State Variables ===
let initialBank = [];
let evensBank = [];
let oddsBank = [];

// === Root Element ===

const root = document.getElementById("app");

// === UI Components ===

const form = document.createElement(`form`);

const input = document.createElement(`input`);
input.type = `number`;
input.placeholder = `input a number`;
input.addButton = `Add number`;

form.appendChild(input);

function render() {
  //root.innerHTML = "";
  form.appendChild(input);
}

render(root);

//following along with Jonathan below

// const State = {
//   bank: [];
//   odss: [];
//   evens: [];
// }

// const appDiv = document.querySelector("#app");
// appDiv.innerHTML = `<h1>Odds and Evens</h1>
// <form>
// <label>Add a number to the bank</label>
// <input />
// <button>Add Number<button>
// <button>Sort 1</button>
// <button>Sort All</button>
// </form>

// <h2>Bank</h2>
// <output></output>

// <h2>Odds</h2>
// <output></output>

// <h2>Evens</h2>
// <output></output>

// `;
