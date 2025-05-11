interface Props {
  image: string;
  title: string;
  btnText: string;
  onBtnClick: VoidFunction;
}

export default function Card({ image, title, btnText, onBtnClick }: Props) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title}></img>
      <div className="card-body">
        <h2 className="fs-5 card-title">
          {title}
        </h2>
        <button onClick={onBtnClick} className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}