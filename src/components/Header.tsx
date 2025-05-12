import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-medium" to="/">
          Portal Rick and Morty
        </Link>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">
                Personagens
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations">
                Locais
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">
                Episódios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}