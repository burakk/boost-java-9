import "./assets/styles/reset.css";
import "./App.css";
import { NavMain } from "./components/NavMain";
import { Page01 } from "./pages/Page01";
import { Page02 } from "./pages/Page02";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <header>
        <NavMain />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Page01 />} />
          <Route path="/egzersiz-1" element={<Page02 />} />
        </Routes>
      </main>
      <footer>F</footer>
    </>
  );
}

export default App;
