import { iconGithub } from "./Icons";
import classes from "../assets/styles/NavSocial.module.css";

export function NavSocial() {
  return (
    <nav className={classes.NavSocial}>
      <h2>Sosyal Bağlantılar</h2>
      <ul>
        <li>
          <a href="#">{iconGithub}</a>
        </li>
      </ul>
    </nav>
  );
}
