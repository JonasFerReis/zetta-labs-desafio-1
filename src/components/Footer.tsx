import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h4>Rick and Morty</h4>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>

        <div>
          <h4>Links</h4>
          <ul className="list-unstyled d-flex gap-3 mb-0">
            <li>
              <Link to="/characters" className="text-light text-decoration-none">
                Personagens
              </Link>
            </li>
            <li>
              <Link to="/locations" className="text-light text-decoration-none">
                Locais
              </Link>
            </li>
            <li>
              <Link to="/episodes" className="text-light text-decoration-none">
                Episódios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
