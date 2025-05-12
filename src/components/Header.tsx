import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";

export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-medium" to="/">
          Portal Rick and Morty
        </Link>

        <div>
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <NavbarLink to="/characters" iconName="bi-person-fill" text="Personagens" />
            </li>
            <li className="nav-item">
              <NavbarLink to="/locations" iconName="bi bi-pin-map-fill" text="Locais" />
            </li>
            <li className="nav-item">
              <NavbarLink to="episodes" iconName="bi-film" text="Episódios" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}