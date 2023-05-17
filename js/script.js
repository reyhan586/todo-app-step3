const element = document.querySelector("#my-button");
element.addEventListener("click", my_function);

function my_function() {
function getRandomLightColor() {
    let r = 255 ;
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgba(${r}, ${g}, ${b} , 0.7)`;
  }
  const box = document.createElement("div");
  const body = document.querySelector("section");
  const len = body.childNodes.length;
  const lastChild = body.lastChild;
  const text = document.createElement("input");
  box.appendChild(text);
  box.style.backgroundColor= getRandomLightColor();
  box.classList.add("color");
  body.appendChild(box);
  text.focus();
  text.classList.add("input");
}
