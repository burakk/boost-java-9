import { useState } from "react";
import { sculptureList } from "../data";

import "../assets/styles/gallery.css";

export function Page01() {
  return (
    <section>
      <h1>Sayfa 01 - Bir komponentin hafızası</h1>
      <Button />

      <Gallery />

      <FrmRegisterUser />
    </section>
  );
}

/*
function Button() {
  console.log("Ben buton");
  let counter = 0;
  function handleClick() {
    counter++;
    console.log(counter);
    Button();
  }
  return (
    <button type="button" onClick={handleClick}>
      {counter}
    </button>
  );
}
*/

function Button() {
  // [stateVariable, setterFunction ] = useState( initialvalue )
  const [counter, setCounter] = useState(0);
  console.log("Ben buton", counter);

  function handleClick(e) {
    setCounter(0 + 1); //triggers a new render ( yeni bir render tetiklenir)
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    //setCounter(counter + 2);
    console.log("I am handle click");
  }

  return (
    <button type="button" onClick={handleClick}>
      Ben buton {counter}
    </button>
  );
}

// const [name, setName] = useState();
// const [searchTerm, setSearchTerm] = useState();

function Gallery() {
  const [index, setIndex] = useState(0);

  const [showDetail, setShowDetail] = useState(false);

  //1- mümkünse dom api'yi kullanmayın örnek: e.target.style.background

  /* 2- Component hafızasına gereksiz kayıtlar yapmayın örnek ->

        const[ index, setIndex ] = useState(0);

        const[ disabled, setDisabled ] = useState(true); //gereksiz

        index === sculptureList.length ? true : false;

  */

  function handleNext() {
    setIndex(index + 1);
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="gallery">
      <button
        type="button"
        onClick={handlePrev}
        disabled={index === 0 ? true : false}
      >
        Prev Artwork
      </button>
      <span>
        {index + 1} / {sculptureList.length}
      </span>
      <button
        type="button"
        onClick={handleNext}
        disabled={index > sculptureList.length - 2 ? true : false}
      >
        Next Artwork
      </button>

      <h1>{sculptureList[index].name}</h1>
      <figure>
        <img src={sculptureList[index].url} alt="" />
        <figcaption>Artist:{sculptureList[index].artist}</figcaption>
      </figure>

      {showDetail && <p>{sculptureList[index].description}</p>}

      <button
        type="button"
        onClick={() => {
          setShowDetail(!showDetail);
        }}
      >
        {showDetail ? "Hide Detail" : "Show Detail"}
      </button>
    </div>
  );
}

function FrmRegisterUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;
  function handleSubmit(e) {
    e.preventDefault();

    /* Bunu yapmayın
    const inpNameEl = document.querySelector("input[name=firstName][type=text]");

    const inpFirstNameVal = inpNameEl.value
    */
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleFirstNameChange}
        value={firstName}
        placeholder="Adınız"
      />

      <input
        type="text"
        name="lastName"
        onChange={handleLastNameChange}
        value={lastName}
        placeholder="Soyadınız"
      />

      <button type="submit">Kaydet</button>

      <p>Sayın {fullName}</p>
    </form>
  );
}
