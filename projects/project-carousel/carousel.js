const sliderEl = document.querySelector(".carousel>.slider");

const sliderNav = document.querySelector(".carousel>nav");

/* Event delegation */
sliderNav.addEventListener("click", handleIndexClick);

function handleIndexClick(e) {
  const target = e.target;
  const index = parseInt(target.dataset.index);
  const moveBy = -100 * index + "%";

  const oldSelectedBtn = document.querySelector(
    ".carousel > nav > button[aria-selected=true]"
  );
  oldSelectedBtn.setAttribute("aria-selected", false);

  target.setAttribute("aria-selected", true);

  sliderEl.style.marginLeft = moveBy;
}
