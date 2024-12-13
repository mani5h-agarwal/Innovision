import "./Gallery.css";

const Gallery = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="outer-gallery">
      <div className="title-box-g">
        <a className="title-g">Gallery</a>
        <a className="subtitle-g">Glimpse of Innovision&#39;24</a>
      </div>
      <div className="scope">
        {numbers.map((number) => (
          <span style={{ "--i": number }} key={number}>
            <img src={`${number + ".jpeg"}`} alt="not found"></img>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
