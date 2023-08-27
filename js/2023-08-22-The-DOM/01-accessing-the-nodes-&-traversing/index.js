console.log(document);

//accesing the nodes
document.title = "Hellloooo";

const btnEl = document.getElementById("theButton");

btnEl.textContent = "Noop";

const btnEls = document.getElementsByTagName("button");

console.log(btnEls);

for (let btn of btnEls) {
  console.log(btn);
}

// querySelector, querySelectorAll

const theBtnEl = document.querySelector("html body #theButton");

console.log(theBtnEl, "****");

const theP = document.querySelector("p");

theP.textContent = "Hu hu!!!";

const allPEls = document.querySelectorAll("p"); // [ pNode, pNode, pNode, pNode, pNode]

allPEls.forEach(
  (node, index) =>
    (node.textContent = `I am the ${index}. ${node.tagName} element`)
);



console.log(allPEls);



const listEl = document.querySelector("ul.basic-list.md");


/* Traversing the dom */
const parentElOfList = listEl.parentElement;

console.log(listEl.parentElement)



parentElOfList.nextElementSibling;

console.log(parentElOfList.nextElementSibling)