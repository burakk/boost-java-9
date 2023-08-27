const boxEl = document.querySelector(".box");


// style property
boxEl.style.backgroundColor = "#ff0000";
boxEl.style.marginTop = "100px";
boxEl.style.borderColor = "#0000ff";



// dataset 
const theme = boxEl.dataset.prefersColorScheme;
const isHidden = boxEl.dataset.hidden;
const index = boxEl.dataset.index;

console.log(theme, isHidden, typeof index );


// getAttribute

const classAttr = boxEl.getAttribute("class")

// setAttribute



// classlist

const classList = boxEl.classList;

console.log(classList);


// classList.add(), classList.remove(), classList.toggle()

boxEl.classList.add("lg");

boxEl.classList.remove("lg");

boxEl.classList.toggle("lg");

boxEl.classList.toggle("lg");

boxEl.classList.toggle("lg");


// contains
const isLg = boxEl.classList.contains("lg");

console.log(isLg);



// textContet
boxEl.textContent = "Hello box...";

//innerHTML

boxEl.innerHTML =  "<p>I am the par<p>";




// document

// imperative way of doing things
const myNewArticleEl = document.createElement("article");
myNewArticleEl.classList.add("box");
myNewArticleEl.textContent = "I am the article of 2023";

document.body.append(myNewArticleEl);





