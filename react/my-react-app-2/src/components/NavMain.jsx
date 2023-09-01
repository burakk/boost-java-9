import classes from "../assets/styles/NavMain.module.css";

export const NavMain = ({ setUrl, url }) => {
  return (
    <nav className={classes.NavMain}>
      <ul>
        <li>
          <a
            className={url === "01" ? classes.ActiveLink : ""}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setUrl("01");
            }}
          >
            1
          </a>
        </li>
        <li>
          <a
            className={url === "02" ? classes.ActiveLink : ""}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setUrl("02");
            }}
          >
            2
          </a>
        </li>
        <li>
          <a
            className={url === "03" ? classes.ActiveLink : ""}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setUrl("03");
            }}
          >
            3
          </a>
        </li>
      </ul>
    </nav>
  );
};
