interface Props {
  label: String;
  text?: String;
}

export default function InfoLine({ label, text}: Props) {
  return (
    <div>
      <span className="fw-bold pe-1">
        {label}:
      </span>
      <span>
        {text ? text : "Unknown"}
      </span>
    </div>
  );
}