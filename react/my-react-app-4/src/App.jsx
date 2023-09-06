import { useState } from "react";
import "./App.css";

const DATA_TODOS = [
  { id: 0, content: "Spor yapsan iyi olur...", isCompleted: false },
  { id: 1, content: "Biraz yürüyüş...", isCompleted: false },
  { id: 2, content: "Biraz programlama...", isCompleted: false },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Yapılacaklar</h1>

      <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="Yapılacak bir iş yaz..."
        />
        <button type="submit">Ekle</button>
      </form>

      <ul>
        <TodoItem content="Spor Yap" />
        <TodoItem content="Yürüyüş Yap" />
      </ul>
    </main>
  );
}

function TodoItem({ content }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const viewTemplate = (
    <li>
      <input type="checkbox" name="" id="" />
      {content}
      <button type="button">Düzenle</button>
      <button type="button">Sil</button>
    </li>
  );

  const editTemplate = (
    <li>
      <input type="checkbox" name="" id="" />
      <input type="text" />
      <button type="button">Kaydet</button>
      <button type="button">Kapat</button>
    </li>
  );

  return <>{isEditMode ? editTemplate : viewTemplate}</>;
}

export default App;
