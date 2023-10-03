import initRegister from "./register.js";

export default function initHome() {
  const mainContainer = document.querySelector("main");

  const div = document.createElement("div");
  div.classList.add("container-intro");
  div.id = "divHome";

  const h1 = document.createElement("h1");
  h1.innerText = "Churrascômetro";

  const p = document.createElement("p");
  p.innerText = "Organize melhor o seu churrasco! O Churrascômetro foi desenvolvido com o intuito de facilitar a organização dos gastos do seu churrasco, tornando o cálculo muito mais preciso e eficiente para que você e seus convidados gastem na medida certa para um ótimo churrasco.";

  const button = document.createElement("button");
  button.innerHTML = `Calcular seu churrasco <span class="span-button">➜</span>`;
  button.id = "buttonHome";
  button.disabled = "true";
  button.classList.add("dis-btn");

  const img = document.createElement("img");
  img.src = "./img/churras_init.svg";

  mainContainer.appendChild(div);

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(button);
  div.appendChild(img);

  const formRegister = initRegister();
  console.log(formRegister)
}
