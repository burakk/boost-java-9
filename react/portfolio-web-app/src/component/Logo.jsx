import { NavLink } from "react-router-dom";

export function LogoAdmin() {
  const style = {
    backgroundColor: "var(--clr-primary)",
    display: "block",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "1.3rem",
    padding: "16px",
    color: "black",
  };
  return (
    <NavLink to="/admin" className="logoAdmin" style={style}>
      <img width="60px" src="/images/raven.png" alt="" />
      Java - 9 Portfolio admin
    </NavLink>
  );
}
