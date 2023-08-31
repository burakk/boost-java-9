import { Logo } from "./components/Logo";
import { NavMain } from "./components/NavMain";
import { iconGithub } from "./components/Icons";

export default function App() {
  return (
    <>
      <header>
        <Logo />

        <NavMain />
      </header>
      <main>
        <section>
          <h1>Bir komponentin hafızası</h1>
        </section>
      </main>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="#">{iconGithub}</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
