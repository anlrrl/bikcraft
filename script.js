/*const botao = document.querySelector("button");

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  console.log(total);
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Não é possível adicionar mais números");
  }
}

if (botao) {
  botao.addEventLi stener("click", somar);
}*/

/*
const lista = ["JavaScript", "HTML", "CSS", "PHP"];
const body = document.querySelector("body");

function adicionarBody(item) {
  body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(adicionarBody);
*/
/*
const links = Array.from(document.querySelectorAll("nav a"));

const ultimoLink = links.pop();
console.log(links);

function logHref(item) {
  const href = item.href;
  console.log(href);
}

links.forEach(logHref);

console.log(links[links.length - 1]);

const lista = ["JavaScript", "HTML", "CSS"];

const ultimo = lista.pop();
const primeiro = lista.shift();

console.log(ultimo);
console.log(primeiro);

lista.push("PHP");
console.log(lista);
*/

const links = document.querySelectorAll("nav a");

function ativarLink(links) {
  const href = links.href;
  const url = document.location.href;

  if (href === url) {
    links.style.backgroundColor = "black";
    links.style.color = "white";
  }

  console.log(href);
  console.log(url);
}

links.forEach(ativarLink);
