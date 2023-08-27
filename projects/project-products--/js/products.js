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
DATA_PRODUCTS.forEach(createProduct);

function createProduct({ title, price, id, img: src }) {
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
    const productId = e.target.dataset.id; //string

    const selectedProduct = DATA_PRODUCTS.find((product) => {
      if (product.id == productId) {
        return true;
      }
    });

    updateBasketList(selectedProduct, productId);
    createBasketEls();
  }
}

function updateBasketList(selectedProduct) {
  const inBasket = basket.find((product) => {
    if (product.id == selectedProduct.id) {
      product.basketCount++;
      return true;
    }
  });

  if (!inBasket) {
    basket.unshift({ ...selectedProduct, basketCount: 1 });
  }

  alert(
    basket.reduce((acc, { basketCount, price }) => {
      return acc + basketCount * price;
    }, 0)
  );
}

function createBasketEls() {
  basketContainerContent.innerHTML = "";
  basket.forEach(({ img: src, title, basketCount }) => {
    const divEl = document.createElement("div");
    divEl.textContent = title + " " + basketCount;
    const imgEl = document.createElement("img");
    imgEl.src = `img/${src}`;

    divEl.prepend(imgEl);

    basketContainerContent.append(divEl);
  });
}
