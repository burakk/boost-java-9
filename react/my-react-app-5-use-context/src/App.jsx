import { useState } from "react";
import "./App.css";
import { FooterBar } from "./components/FooterBar";
import { ThemeContext } from "./context/ThemeContext";

//1. kullanmak istediğin context için context klasöründe bir dosya aç
//2. createContext function'ile context'ini oluştur -> bkz. ThemeContextjs
//3. Contextin ile beslemek istediğin jsx ağacını
//ThemeContext.Provider ile sar

function App() {
  const [theme, setTheme] = useState("dark");

  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <header>
          <button onClick={handleThemeChange}>Tema değiştir</button>
        </header>
        <main>M</main>
        <footer>
          <FooterBar />
        </footer>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
