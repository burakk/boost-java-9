import { DATA_CONTACTS } from "../data";
import { useState } from "react";
/*
import "../assets/styles/FilterableContactList.css"
*/

DATA_CONTACTS.sort((a, b) => {
  if (a.profession < b.profession) {
    return -1;
  }

  if (a.profession > b.profession) {
    return 1;
  }

  return 0;
});

import classes from "../assets/styles/FilterableContactList.module.css";

function SearchBar({
  searchTerm,
  onTermChange,
  onlineOnly,
  onOnlineOnlyChange,
}) {
  //const [searchTerm, setSearchTerm] = useState("");

  return (
    <header>
      <h3>Filtrelenebilir Kişi Listesi</h3>
      <form>
        <input
          type="text"
          name="searhTerm"
          id="searchTerm"
          placeholder="Kişi adı yazınız"
          onChange={(e) => {
            onTermChange(e.target.value);
          }}
          value={searchTerm}
        />

        <label>
          <input
            type="checkbox"
            name="onlyOnline"
            id="onlyOnline"
            onChange={(e) => {
              onOnlineOnlyChange(e.target.checked);
            }}
            checked={onlineOnly}
          />
          Sadece online olanları göster
        </label>
      </form>
    </header>
  );
}

function ContactsTable({ searchTerm, onlineOnly }) {
  /*
  const contacts = DATA_CONTACTS.filter((c) => c.name.includes(searchTerm)).map((c) => <RowContact key={c.id} name={c.name} />);
  */

  const contacts = [];
  let lastProfession = null;

  DATA_CONTACTS.forEach((c) => {
    const lowerName = c.name.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    const indexOf = lowerName.indexOf(lowerSearchTerm);

    if (indexOf === -1) {
      return;
    }

    if (onlineOnly && !c.isOnline) {
      return;
    }

    if (lastProfession !== c.profession) {
      contacts.push(
        <RowProfession key={c.profession} profession={c.profession} />
      );
    }

    contacts.push(
      <RowContact
        key={c.id}
        name={c.name}
        profession={c.profession}
        email={c.email}
      />
    );

    lastProfession = c.profession;
  });

  //boş bir liste oluştur

  //forEach metodu ile DataContacts içerinde dön

  //arama terimi kişi adında yoksa boş listeye bu elemanı ekleme

  //listeyi göster

  //search term "u" ->   [ <RowContact name="Burak" email="asd@asd.com">,  <RowContact name="Doruk" email="asd@asd.com">]
  return (
    <table className={classes.tbl}>
      <thead>
        <tr>
          <th>Kişi adı</th>
          <th>Eposta</th>
        </tr>
      </thead>

      <tbody>
        {contacts}

        {/*
        <RowProfession profession="Chemist" />
        <RowContact name="Burak" email="asd@asd.com" />
        <RowContact name="Berk" email="asd@asd.com" />
        <RowProfession profession="Frontend Dev" />
        <RowContact name="Doruk" email="asd@asd.com" />
        <RowContact name="Emre" email="asd@asd.com" />
        */}
      </tbody>
    </table>
  );
}

function RowProfession({ profession }) {
  return (
    <tr>
      <th colSpan={2}>{profession}</th>
    </tr>
  );
}

function RowContact({ name, email }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
}

export function FilterableContactList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [onlineOnly, setOnlineOnly] = useState(false);
  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
        onlineOnly={onlineOnly}
        onOnlineOnlyChange={setOnlineOnly}
      />
      <div>
        <ContactsTable searchTerm={searchTerm} onlineOnly={onlineOnly} />
      </div>
    </div>
  );
}
