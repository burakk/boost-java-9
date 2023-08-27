//objelerden oluşan bir js dizisi
const DATA_PRODUCTS = [
  {
    id: 0,
    title: "Monster Keyboard",
    price: 2000,
    promotion: 10,
    count: 10,
    img: "01.jpg",
  },

  {
    id: 1,
    title: "Monster Monitor",
    price: 14000,
    promotion: 10,
    count: 10,
    img: "02.webp",
  },

  {
    id: 3,
    title: "Monster Mouse",
    price: 14000,
    promotion: 10,
    count: 10,
    img: "01.jpg",
  },
];

const basket = [];

//select the product list ul
const productListEl = document.getElementById("product-list");

productListEl.addEventListener("click", handleProductClick);

const basketContainerContent = document.querySelector(
  "#basket-container > .content"
);

//for

//for of

// array method foreach
DATA_PRODUCTS.forEach(createProductHTML);

function createProductHTML({ title, price, id, img: src }) {
  //create new li
  const liEl = document.createElement("li");
  liEl.classList.add("card");

  //ürün başlığı için h2 oluştur
  const h2El = document.createElement("h2");
  h2El.textContent = title;
  // append h2El to li
  liEl.append(h2El);

  //create new  img
  const imgEl = document.createElement("img");
  imgEl.src = "img/" + src;

  // append img to li
  liEl.append(imgEl);

  //fiyatı gösterebilmek için p html tag'i oluşturuyoruz...
  const pEl = document.createElement("p");
  pEl.textContent = price + "TL";

  //fiyat paragraf elemanını li elemanına ekle
  liEl.append(pEl);

  //sepete at butonu ekle
  const btnBuyEl = document.createElement("button");
  btnBuyEl.textContent = "Sepete Ekle";
  btnBuyEl.dataset.id = id;

  liEl.append(btnBuyEl);

  //append li to product list
  productListEl.append(liEl);
}

function handleProductClick(e) {
  if (e.target.tagName === "BUTTON") {
    const selectedProductId = e.target.dataset.id; //string

    const selectedProduct = DATA_PRODUCTS.find((product) => {
      if (product.id == selectedProductId) {
        return true;
      }
    });

    addToBasketArr(selectedProduct);

    //show items in basket array
    createBasketHTML();
  }
}
//basket array add operation
function addToBasketArr(selectedProduct) {
  //ürün sepete daha önce eklenmiş mi diye kontrol etmemiz gerekiyor.  Ürün önceden bir kez eklenmişse sepetteki miktarını bir arttırıyoruz.
  const found = basket.find((product) => {
    if (product.id == selectedProduct.id) {
      product.basketCount++;
      return true;
    }
  });

  //ürün sepete hiç eklenmemişse basketCount'u 1 olan bir object olarak ekliyoruz...
  if (!found) {
    basket.unshift({ ...selectedProduct, basketCount: 1 });
  }
}

function createBasketHTML() {
  basketContainerContent.innerHTML = "";
  basket.forEach(({ img: src, title, basketCount }) => {
    const divEl = document.createElement("div");
    divEl.textContent = title + " x " + basketCount;
    const imgEl = document.createElement("img");
    imgEl.src = `img/${src}`;

    divEl.prepend(imgEl);

    basketContainerContent.append(divEl);
  });

  const basketTotal = calculateBasketTotal();
  const headerEl = document.querySelector("#basket-container > header");
  headerEl.textContent = "Sepetiniz: " + basketTotal;
}

function calculateBasketTotal() {
  // [ {price:1200, basketCount:2}, { price:1000, basketCount:1} ]
  return basket.reduce(
    //1. step acc 0 - current product {price:1200, basketCount:2}
    //2.step acc 2400 - current product  { price:1000, basketCount:1}
    (acc, product, index, arr) => acc + product.price * product.basketCount, //arg
    0 //yığın için ilk değer
  );
}
