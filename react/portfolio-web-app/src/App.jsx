import "./assets/styles/reset.css";
import "./App.css";

import { Works } from "./pages/admin/Works";

import { Dashboard } from "./pages/admin/Dashboard";
import { Login } from "./pages/admin/Login";

import { Routes, Route } from "react-router";

import { LogoAdmin } from "./component/Logo";

import { ProtectedRoute } from "./ProtectedRoute";
import { NavAdmin } from "./component/Nav";

import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  function logOut() {
    localStorage.clear("token");
    setToken(false);
  }

  return (
    <>
      <header>
        <LogoAdmin />

        <NavAdmin />
      </header>

      <main>
        <header>
          {token && (
            <button type="button" onClick={logOut}>
              Çıkış yap
            </button>
          )}
          Merhaba Burak.{" "}
        </header>
        <section>
          <Routes>
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route path="" element={<Dashboard />} />
              <Route path="works" element={<Works />} />
            </Route>

            <Route path="login" element={<Login onSetToken={setToken} />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
