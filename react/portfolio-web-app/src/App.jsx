import "./App.css";

import { Works } from "./pages/admin/Works";
import { Login } from "./pages/admin/Login";

import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <header></header>

      <main>
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
