import { NavLink } from "react-router-dom";

export function NavMain() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Ana sayfa</NavLink>
        </li>
        <li>
          <NavLink to="/egzersiz-1">Egzersiz 1</NavLink>
        </li>

        <li>
          <NavLink to="/egzersiz-2">Egzersiz 2</NavLink>
        </li>

        <li>
          <NavLink to="/egzersiz-3">Egzersiz 3</NavLink>
        </li>

        <li>
          <NavLink to="/egzersiz-4">Egzersiz 4</NavLink>
        </li>
      </ul>
    </nav>
  );
}
