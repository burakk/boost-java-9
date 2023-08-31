import { v4 as uuidv4 } from "uuid";

const myArr = ["Burak", "Marry", "Jane", "Deniz"];

const myJsxList = [
  <li key="a">Burak</li>,
  <li key="b">Aykut</li>,
  <li key="c">Perihan</li>,
];

// reduce - foreach - filter - map

/* Liste render etmek */
export function Page04() {
  return (
    <section>
      <h2>Liste Render Etmek</h2>

      <ul>
        {myArr}

        {myJsxList}
      </ul>

      <PeopleOfJava9 />

      <PeopleByProfession profession="Chemist" />
    </section>
  );
}

const peopleList = ["Berk", "Doruk", "Hülya", "Engin", "Recep", "Emre"];

function PeopleOfJava9() {
  const peopleJsxList = peopleList.map((name, index) => (
    <li key={index}>{name}</li>
  ));
  return (
    <>
      <h2>Java9 Ekibi</h2>
      <ul>{peopleJsxList}</ul>
    </>
  );
}

// (num)=>{ return num * 2}

// num=>num*2

const famousPeopleList = [
  { id: 0, name: "Bob Marley", profession: "Singer & Song Writer" },
  { id: 1, name: "Tim Berners Lee", profession: "Computer Scientist" },
  { id: 2, name: "Marie Curie", profession: "Chemist" },
  { id: 3, name: "Bor", profession: "Chemist" },
];

function PeopleByProfession({ profession }) {
  const filteredPeople = famousPeopleList.filter(
    (person) => person.profession === profession
  ); //[ {}, {}  ]

  const filteredPeopleJsxArr = filteredPeople.map((person) => (
    <li key={person.id}>{person.name + "-" + person.profession}</li>
  ));

  return (
    <>
      <h2>{profession} list</h2>
      <ul>{filteredPeopleJsxArr}</ul>
    </>
  );
}

const fruits = ["orange", "banana", "kiwi", "apple", "pineapple", "grapefruit"];

const friutUniqueIds = fruits.map((fruit) => uuidv4()); //

console.log(friutUniqueIds);

function Fruits() {
  const fruitsJsxArr = fruits.map((fruit, index) => (
    <li key={friutUniqueIds[index]}>{fruit}</li>
  ));
  return (
    <>
      <h3>Sevdiğim meyvalar...</h3>

      <ul></ul>
    </>
  );
}
