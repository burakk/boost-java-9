import "./assets/styles/reset.css";
import "./App.css";
import { NavMain } from "./components/NavMain";
import { Page01 } from "./pages/Page01";
import { Page02 } from "./pages/Page02";

import { Page03 } from "./pages/Page03";
import { Page04 } from "./pages/Page04";
import { Page05 } from "./pages/Page05";

import { Routes, Route } from "react-router";
import { Logo } from "./components/Logo";

function App() {
  return (
    <>
      <header>
        <Logo />
        <NavMain />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Page01 />} />
          <Route path="/egzersiz-1" element={<Page02 />} />

          <Route path="/egzersiz-2" element={<Page03 />} />

          <Route path="/egzersiz-3" element={<Page04 />} />

          <Route path="/egzersiz-4" element={<Page05 />} />
        </Routes>
      </main>
      <footer>F</footer>
    </>
  );
}

export default App;
