export function Page05() {
  return (
    <section>
      <h2>Functional Programming - Pure Functions</h2>

      <Recipe guestCount={3} />

      <Recipe guestCount={3} />

      <Table />
    </section>
  );
}

// --- *** Pure functions
// 1- Sadece kendi işine bakar.
// 2- Aynı argümanlarla çağırdığınızda hep aynı sonucu vereceğinden eminsinizdir.

// --- *** Local mutations are fine - Yerel mutasyonlarla sorunumuz yok

const double = (n) => 2 * n;

/* ------  */

//Aynı şekilde çağırmamıza rağmen farklı sonuçlar döndüren ve "pure" olmayan bir fonksiyon örneği

let counter = 0;

function testing() {
  counter++;

  return counter;
}

console.log(testing()); //1

console.log(testing()); //2

console.log(testing()); //3

/* ------  */

/* Soğuk çay tarifi komponenti */
/* Komponentimize ulaşan guestCount argümanı aynı ise komponentimizin üreteceği  sonuş hiç değişmez */
function Recipe({ guestCount }) {
  console.log("Ben soğuk çay tarifi");
  return (
    <>
      <h3>{guestCount} kişi için soğuk çay tarifi</h3>
      <ul>
        <li>{guestCount * 0.5} buz</li>
        <li>{guestCount * 100}ml su</li>
        <li>{guestCount} limon</li>
      </ul>
    </>
  );
}

/* ---------- Impure Component - Saf olmayan Komponent---- */

let guestCount = 0;

function Table() {
  console.log("Ben table");
  return (
    <>
      <h3>Masamız:</h3>
      <ul>
        <Chair />
        <Chair />
        <Chair />
        <Chair />

        <PureChair guestCount={1} />
        <PureChair guestCount={2} />
        <PureChair guestCount={3} />
      </ul>
    </>
  );
}

function Chair() {
  console.log("Ben sandalye");
  guestCount++;
  return <li>{guestCount}. kişi için sandalye</li>;
}

function PureChair({ guestCount }) {
  return <li>{guestCount}. kişi için sandalye</li>;
}

function GlassTable() {
  const chairs = [];

  for (let i = 0; i < 10; i++) {
    chairs.push(<PureChair key={i} guestCount={i} />);
  }

  return chairs;
}

// --- side effects ---

function testingSideEffects() {
  //--- Aşağıdaki eylemler yan etkiler olarak tanımlanabilir ( side effects )
  //dom api kullanman ( olay dinleyicisi eklenmesi )
  //server requesti yapman ( fetch api )
  //local scope dışında global bir değişken değeri değiştirmen
}
