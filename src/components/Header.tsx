import { Link } from "react-router-dom";
import "../styles/Header.scss";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-medium" to="/">
          Obras.com
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projetos">
                Projetos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}