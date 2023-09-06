import { useState } from "react";
import "./assets/styles/reset.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const DATA_TODOS = [
  { id: 0, content: "Spor yapsan iyi olur...", isCompleted: false },
  { id: 1, content: "Biraz yürüyüş...", isCompleted: false },
  { id: 2, content: "Biraz programlama...", isCompleted: false },
];

function App() {
  const [todos, setTodos] = useState(DATA_TODOS);

  //action addTodo
  function addTodo(content) {
    //setTodos
    const newTodo = { id: uuidv4(), content, isCompleted: false };

    setTodos([newTodo, ...todos]);
  }

  //action deleteTodo
  function deleteTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  }

  //action editTodo
  function editTodo(id, newContent) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, content: newContent };
        }

        return todo;
      })
    );
  }

  //action toggleCompleted
  function toggleTodo() {}

  return (
    <main className="todo-app">
      <h1>Yapılacaklar Listesi</h1>

      <TodoForm onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            content={todo.content}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
          />
        ))}
      </ul>
    </main>
  );
}

function TodoForm({ onAddTodo }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) {
      return;
    }
    onAddTodo(content);
    setContent("");
  }

  return (
    <form id="frm-add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        name="content"
        id="content"
        value={content}
        placeholder="Yapılacak bir iş yaz..."
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

function TodoItem({ id, content, onDeleteTodo, onEditTodo }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newContent, setNewContent] = useState("");
  const viewTemplate = (
    <li>
      <div className="container-content">
        <input type="checkbox" name="" id="" />

        {content}
      </div>
      <footer>
        <button
          type="button"
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          Düzenle
        </button>
        <button
          type="button"
          onClick={() => {
            onDeleteTodo(id);
          }}
        >
          Sil
        </button>
      </footer>
    </li>
  );

  const editTemplate = (
    <li>
      <form
        className="frm-edit-todo"
        onSubmit={(e) => {
          e.preventDefault();
          onEditTodo(id, newContent);
          setIsEditMode(false);
          //setNewContent("");
        }}
      >
        <div className="container-content">
          <input
            type="text"
            value={newContent || content}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </div>

        <footer>
          <button type="submit">Kaydet</button>
          <button
            type="button"
            onClick={() => {
              setIsEditMode(false);
              //setNewContent(content);
            }}
          >
            Kapat
          </button>
        </footer>
      </form>
    </li>
  );

  return <>{isEditMode ? editTemplate : viewTemplate}</>;
}

export default App;
