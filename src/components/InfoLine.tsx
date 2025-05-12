interface Props {
  label: String;
  text?: String;
}

export default function InfoLine({ label, text}: Props) {
  return (
    <div>
      <span className="fw-medium pe-1">
        {label}:
      </span>
      <span className="text-muted">
        {text ? text : "Unknown"}
      </span>
    </div>
  );
}