import { DATA_ME } from "../data";

import { useState } from "react";

import classes from "../assets/styles/Accordion.module.css";

export function Accordion() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={classes.Accordion}>
      {selectedId}
      <h2>Akordiyon Panel</h2>
      <ul>
        {DATA_ME.map((d) => (
          <Panel
            key={d.id}
            {...d}
            id={d.id}
            onSelectedIdChange={setSelectedId}
            isActive={d.id === selectedId}
          />
        ))}
      </ul>
    </div>
  );
}

export function Panel({ isActive, title, id, content, onSelectedIdChange }) {
  return (
    <li>
      <h4>{title}</h4>
      {isActive && <p>{content}</p>}
      {!isActive && (
        <button
          type="button"
          onClick={() => {
            onSelectedIdChange(id);
          }}
        >
          Detay
        </button>
      )}
    </li>
  );
}
