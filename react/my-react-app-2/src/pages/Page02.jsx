import { useState } from "react";

export function Page02() {
  return (
    <section>
      <h1>
        Sayfa 02 - State içerisindeki objeleri güncellemek - Updating objects in
        state
      </h1>

      <MovingDot />

      <FrmPerson />

      <FrmPerson2 />
    </section>
  );
}

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //onPointerMove  e.clientX, e.clientY

  const stageStyle = {
    border: "4px solid gray",
    padding: "24px",
    position: "relative",
    width: "200px",
    height: "200px",
    backgroundColor: "pink",
  };
  const dotStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "blue",
    position: "absolute",
    transform: `translate( ${position.x - 20}px , ${position.y - 180}px )`,
    pointerEvents: "none",
  };

  function handlePointerMove(e) {
    console.log(e);
    /*
     state obje ya da array'inin mutata etme
    position.x = e.clientX;
    position.y = e.clientY;
    */

    //const newPos = { x: e.clientX, y: e.clientY };

    //setPosition(newPos);

    setPosition({ x: e.clientX - 24, y: e.clientY - 24 });
  }

  return (
    <div style={stageStyle} onPointerMove={handlePointerMove}>
      <div style={dotStyle}> </div>
    </div>
  );
}

function FrmPerson() {
  const [person, setPerson] = useState({
    firstName: "Burak",
    lastName: "Kuyucaklı",
    email: "burak.kuyucakli@gmail.com",
  });

  function handleFirstName(e) {
    //person.firstName = e.target.value; *** Mutation yapmayı

    const newPerson = {
      ...person,
      firstName: e.target.value,
    };

    setPerson(newPerson);
  }

  function handleLastName(e) {
    //person.firstName = e.target.value; *** Mutation yapmayı

    const newPerson = {
      ...person,
      lastName: e.target.value,
    };

    setPerson(newPerson);
  }

  function handleEmail(e) {
    //person.firstName = e.target.value; *** Mutation yapmayı

    setPerson({ ...person, email: e.target.value });
  }

  return (
    <form>
      <h2>Kişi formu</h2>
      <input
        type="text"
        name="firstName"
        placeholder="Adınız"
        onChange={handleFirstName}
        value={person.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Soyadınız"
        value={person.lastName}
        onChange={handleLastName}
      />
      <input
        type="email"
        name="email"
        placeholder="Epostanız"
        value={person.email}
        onChange={handleEmail}
      />

      {person.firstName}
      {person.lastName}
      {person.email}
    </form>
  );
}

function FrmPerson2() {
  const [person, setPerson] = useState({
    firstName: "Burak",
    lastName: "Kuyucaklı",
    email: "burak.kuyucakli@gmail.com",
  });

  function handleInputChange(e) {
    //person.firstName = e.target.value; *** Mutation yapmayı
    console.log(e.target.name);

    const newPerson = {
      ...person,
      [e.target.name]: e.target.value,
    };

    setPerson(newPerson);
  }

  return (
    <form>
      <h2>Kişi formu 2</h2>
      <input
        type="text"
        name="firstName"
        placeholder="Adınız"
        onChange={handleInputChange}
        value={person.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Soyadınız"
        value={person.lastName}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Epostanız"
        value={person.email}
        onChange={handleInputChange}
      />

      {person.firstName}
      {person.lastName}
      {person.email}
    </form>
  );
}
