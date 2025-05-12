import NavbarLink from './NavbarLink';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <p className="fs-4 fw-medium mb-1">
            Portal Rick and Morty
          </p>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>

        <div>
          <p className="fs-4 fw-medium mb-1">
            Links
          </p>
          <ul className="list-unstyled d-flex gap-3 mb-0 gap-4">
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
    </footer>
  );
}
