/* Koşullu render - Conditional rendering */
export function Page03() {
  return (
    <section>
      <h2>Koşullu Render - Conditional rendering</h2>

      <PackingList />
    </section>
  );
}

function PackingList() {
  return (
    <div>
      <h4>Einstein &apos; ın yanına alacakları listesi</h4>
      <ul>
        <PackingItem name="Şapka" isPacked={true} />
        <PackingItem name="Gözlük" isPacked={false} />
        <PackingItem name="Tebeşir" isPacked={false} />
        <PackingItem name="Not Defteri" isPacked={false} />
      </ul>

      <h4>Picasso &apos; nun yanına alacakları listesi</h4>
      <ul>
        <PackingItemV2 name="Şapka" isPacked={true} />
        <PackingItemV2 name="Gözlük" isPacked={false} />
        <PackingItemV2 name="Tebeşir" isPacked={false} />
        <PackingItemV2 name="Not Defteri" isPacked={false} />
      </ul>

      <h4>Hawking &apos; in yanına alacakları listesi</h4>
      <ul>
        <PackingItemV3 name="Şapka" isPacked={true} />
        <PackingItemV3 name="Gözlük" isPacked={false} />
        <PackingItemV3 name="Tebeşir" isPacked={false} />
        <PackingItemV3 name="Not Defteri" isPacked={false} />
      </ul>

      <h4>Hesse &apos; nin yanına alacakları listesi</h4>
      <ul>
        <PackingItemV4 name="Şapka" isPacked={true} />
        <PackingItemV4 name="Gözlük" isPacked={false} />
        <PackingItemV4 name="Tebeşir" isPacked={false} />
        <PackingItemV4 name="Not Defteri" isPacked={false} />
      </ul>
    </div>
  );
}

function PackingItem({ name, isPacked }) {
  if (isPacked) {
    return <li>{name} +++ </li>;
  }

  return <li>{name}</li>;
}

function PackingItemV2({ name, isPacked }) {
  if (isPacked) {
    return null; //Boş değer döndürerek hiç render olmamasını sağlıyoruz
  }

  return <li>{name}</li>;
}

/* Ternary operator kullanarak  */
function PackingItemV3({ name, isPacked }) {
  //ternary operator kullanarak
  //return isPacked ? null : <li>{name}</li>;

  return (
    <li>
      {" "}
      {name} {isPacked ? "+++" : ""}{" "}
    </li>
  );
}

/* Ternary operator kullanarak  */
function PackingItemV4({ name, isPacked }) {
  //ternary operator kullanarak
  /* return isPacked ? <li><del>{name}</del></li> : <li>{name}</li> */

  return <li> {isPacked ? <del>{name}</del> : name} </li>;
}

// using logical and operator &&
function PackingItemV5({ name, isPacked }) {
  //logical and  op

  return (
    <li>
      {name} {isPacked && "+++"}
    </li>
  );
}
