import homeScript from "./script/home.js";
import calcScript from "./script/calc.js";

homeScript();
const divHome = document.getElementById("divHome");
const buttonHome = document.getElementById("buttonHome");
buttonHome.addEventListener("click", () => {
  divHome.remove();
  calcScript();
  mainFunctions();
});

function mainFunctions() {
  const formPessoas = document.querySelectorAll(".formPessoas");
  console.log(formPessoas);
}
