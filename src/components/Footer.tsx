import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h4>Obras.com</h4>
          <p className="mb-0">&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>

        <div>
          <h4>Links</h4>
          <ul className="list-unstyled d-flex gap-3 mb-0">
            <li>
              <Link to="/" className="text-light text-decoration-none">
                Início
              </Link>
            </li>
            <li>
              <Link to="/projetos" className="text-light text-decoration-none">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-light text-decoration-none">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
