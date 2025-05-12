interface Props {
  image: string;
  title: string;
  btnText: string;
  onBtnClick: VoidFunction;
}

export default function Card({ image, title, btnText, onBtnClick }: Props) {
  return (
    <div className="card shadow" style={{ width: "16rem" }}>
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <p className="fs-5 fw-medium card-title">
          {title}
        </p>
        <button onClick={onBtnClick} className="btn btn-sm btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}