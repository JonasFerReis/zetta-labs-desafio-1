import { Link } from "react-router-dom";

interface Props {
  page: number;
  lastPage: number;
  url: string;
}

export default function Paginator({ page, lastPage, url }: Props) {

  return (
    <nav aria-label="characters-pagination">
      <span className="pagination justify-content-end">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <Link className="page-link" to={`${url}?page=${page - 1}`}>
            Anterior
          </Link>
        </li>
        <li className="page-item">
          <span className="page-link">
            {page}
          </span>
        </li>
        <li className={`page-item ${page === lastPage ? "disabled" : ""}`}>
          <Link className="page-link" to={`${url}?page=${page + 1}`}>
            Próxima
          </Link>
        </li>
      </span>
    </nav>
  );
}