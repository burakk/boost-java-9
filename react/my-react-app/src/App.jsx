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
import { Page03 } from "./pages/Page03-ConditionalRendering";
import { Page04 } from "./pages/Page04-RenderingLists";
import { Page05 } from "./pages/Page05-Keeping-components-pure";
import { Page06 } from "./pages/Page06-Interaction";

import { MenuSocial } from "./components/MenuSocial";

export default function App() {
  //local bir variable
  const url = "/06";

  /*
  let activePage;
  if( url === "/01" ){
      activePage = <Page01/>;
  }else if( url === "/02"){
    activePage = <Page02/>;
  }else{
    activePage = <Page03/>;
  }
  */

  return (
    <>
      <header className="basic-header">
        <Logo />
        <Menu />
      </header>
      <main>
        {url === "/01" && <Page01 />}
        {url === "/02" && <Page02 />}
        {url === "/03" && <Page03 />}
        {url === "/04" && <Page04 />}
        {url === "/05" && <Page05 />}
        {url === "/06" && <Page06 />}
      </main>
      <footer>
        <MenuSocial />
      </footer>
    </>
  );
}
