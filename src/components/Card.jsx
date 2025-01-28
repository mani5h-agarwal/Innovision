import "./Card.css";

const Card = ({ title, description, image, subtitle, sigimage, onViewClick }) => {
  return (
    <div className="card">
      <div className="circle">
        <img src={image} className="image" alt={title} />
      </div>
      <div className="title-box-card">
        <a className="title-card">{title}</a>
        <a className="subtitle-card">{subtitle}</a>
      </div>
      <p className="description">{description}</p>
      {/* <button className="view-btn" onClick={onViewClick}>
        <a className="button-title-view">Go</a>
      </button> */}
      <img src={sigimage} className="sig-image" alt={subtitle} />
    </div>
  );
};

export default Card;