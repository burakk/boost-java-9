import { NavLink } from "react-router-dom";

export function NavAdmin() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="btn bordered" to="/admin">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="btn bordered" to="/admin/works">
            İşler
          </NavLink>
        </li>

        <li>
          <NavLink className="btn bordered" to="/admin/users">
            Kullanıcılar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
