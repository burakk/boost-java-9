import { Logo } from "./components/Logo";
import { NavMain } from "./components/NavMain";
import { NavSocial } from "./components/NavSocial";

import { Page01 } from "./pages/Page01-Component-Memory";

import { Page02 } from "./pages/Page02";

import { Page03 } from "./pages/Page03";

import "./assets/styles/reset.css";
import "./App.css";

import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("01");

  return (
    <>
      <header>
        <Logo />

        <NavMain setUrl={setUrl} url={url} />
      </header>
      <main className="limited-width">
        {url === "01" && <Page01 />}

        {url === "02" && <Page02 />}

        {url === "03" && <Page03 />}
      </main>
      <footer>
        <NavSocial />
      </footer>
    </>
  );
}
