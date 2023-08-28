import "./assets/styles/reset.css";

import "./App.css"; //css dosyası import ediyoruz...

/*
jsx etiket kuralları:

1. Komşu ya da kardeş etiketler tek bir kapsayıcı etiket içinde olmalı. Extra bir kapsayıcı etiket yazmak istemiyorsak, fragment (<> ... </>) kullanabiliriz

2. Jsx etiketleri mutlaka kapatılmalı

3. birden fazla kelimeden oluşan html attribute'larının çoğu camel case yazılmalıdır.

4. class attribute'u yerine className kullanınız.
*/

import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Page01 } from "./pages/Page01-JsInJsx";
import { Page02 } from "./pages/Page02-Passing-Props";


export default function App() {
  return (
    <>
      <header className="basic-header">
        <Logo />
        <Menu />
       
      </header>
      <main>
        <Page01/>
        <Page02/>
       
      </main>
      <footer>f</footer>
    </>
  );
}

