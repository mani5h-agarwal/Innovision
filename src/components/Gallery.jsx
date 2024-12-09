import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="outer">
      <div className="title-box-g">
        <a className="title-g">Gallery</a>
        <a className="subtitle-g">Glimpse of Innovision&#39;24</a>
      </div>
      <div className="scope">
        <span style={{ "--i": 1 }}>
          <img src="1.jpeg" alt="not found"></img>
        </span>
        <span style={{ "--i": 2 }}>
          <img src="2.jpeg" alt="not found"></img>
        </span>
        <span style={{ "--i": 3 }}>
          <img src="3.jpeg" alt="not found"></img>
        </span>
        <span style={{ "--i": 4 }}>
          <img src="4.jpeg" alt="not found"></img>
        </span>
        <span style={{ "--i": 5 }}>
          <img src="5.jpeg" alt="not found"></img>
        </span>
        <span style={{ "--i": 6 }}>
          <img src="6.jpeg" alt="not found"></img>
        </span>
        <span style={{ "--i": 7 }}>
          <img src="7.jpeg" alt="not found"></img>
        </span>
        <span style={{ "--i": 8 }}>
          <img src="8.jpeg" alt="not found"></img>
        </span>
      </div>
    </div>
  );
};

export default Gallery;
