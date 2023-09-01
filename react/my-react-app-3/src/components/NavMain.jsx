import { Link } from "react-router-dom";

export function NavMain() {
  return (
    <nav>
      Ben nav
      <ul>
        <li>
          <Link to="/">Ana sayfa</Link>
        </li>
        <li>
          <Link to="/egzersiz-1">Egzersiz 1</Link>
        </li>
      </ul>
    </nav>
  );
}
