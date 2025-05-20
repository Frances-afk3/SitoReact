import { Outlet, Link } from "react-router-dom";
import { useAuth  } from "../AuthContext";


export default function RistoranteRoot() {
  const { user, logout } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/ristorante">Dashboard</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/ristorante/ordini">Ordini</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ristorante/menu">Gestione Menu</Link>
            </li>
          </ul>
          <span className="navbar-text">🍽️ {user.username}</span>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet context={{ user }} />
      </div>
    </>
  );
}
