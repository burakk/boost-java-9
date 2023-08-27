const myBtnEl = document.querySelector("[type=button]");

// user scenarios;

//userEvents ---  click, mousemove, mouseover, mouseout, keypress, keydown, keyup, drag, swipe, touch...

myBtnEl.addEventListener("click", handleClick);

function handleClick(e) {
  console.log(e);

  const target = e.target;

  target.classList.toggle("illuminated");
}

const buttons = document.querySelectorAll("nav button");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick2);
});

function handleClick2(e) {
  const target = e.target;

  const index = target.dataset.index;

  // console.log(`Selam ben buton ${index}`);
}

// --- *** Event delegation *** ---

const navEl = document.querySelector("nav");

navEl.addEventListener("click", handleNavClick);

function handleNavClick(e) {
  const index = e.target.dataset.index;
  console.log(e.target.tagName, index);
}
