import { useState } from "react";
import { login } from "../../api/Api";
import { useNavigate } from "react-router";

export function Login({ onSetToken }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    login(credentials).then((token) => {
      if (token) {
        //console.log(typeof token);
        onSetToken(token);
        localStorage.setItem("token", JSON.stringify(token));
        //console.log(localStorage.getItem("token"));
        navigate("/admin");
      }
    });
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <h2>Kullanıcı Girişi</h2>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Kullanıcı adınızı giriniz."
        value={credentials.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Şifrenizi giriniz."
        id="password"
        onChange={handleChange}
        value={credentials.password}
      />

      <button type="submit">Giriş yap</button>
    </form>
  );
}
