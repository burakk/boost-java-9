const asd = new Promise((resolve, reject) => {
  reject("err");
});

const huhu = asd;

const ps = document.querySelectorAll("p");

function animAllP() {
  setTimeout(() => {
    ps[0].style.color = "red";
    setTimeout(() => {
      ps[1].style.color = "red";
    }, 1000);
  }, 1000);
}
//animAllP();

function animP(el) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      el.style.color = "red";
      resolve("ok");
    }, 1000);
  });
}

animP(ps[0])
  .then(() => animP(ps[1]))
  .then(() => animP(ps[2]));
