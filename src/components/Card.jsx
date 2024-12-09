import "./Card.css";

const Card = ({ title, description, image, subtitle, sigimage }) => {
  return (
    <div className="card">
      <div className="circle">
        <img src={image} className="image"></img>
      </div>
      <div className="title-box-card">
        <a className="title-card">{title}</a>
        <a className="subtitle-card">{subtitle}</a>
      </div>
      {/* <p>{description}</p> */}
      <button className="reg-btn">
        <a className="button-title">Register</a>
      </button>
      <img src={sigimage} className="sig-image"></img>
    </div>
  );
};

export default Card;
