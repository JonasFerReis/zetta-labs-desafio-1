import { Link } from "react-router-dom";

interface Props {
  to: string;
  iconName?: string;
  text: string;
}

export default function NavbarLink({ to, iconName, text }: Props) {
  return (
    <Link className="nav-link" to={to}>
      {iconName &&
        <span className="me-1">
          <i className={`bi ${iconName}`} />
        </span>
      }
      <span>
        {text}
      </span>
    </Link>
  );
}