import { useState } from "react";

function Card(props) {
  const [readmore, setReadmore] = useState(false);
  const description = `${props.info.substring(0, 200)}....`;

  function readmoreHandler() {
    //function to toggle read more and read less
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={props.image} className="tour-image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {props.price}</h4>
          <h4 className="tour-name">{props.name}</h4>
        </div>
        <div className="description">
          {readmore ? props.info : description}
          <span onClick={readmoreHandler} className="read-more">
            {readmore ? `Show less` : `Read more`}
          </span>
        </div>
      </div>
      <button
        className="btn-red"
        onClick={() => props.removeTourHandler(props.id)}
      >
        Not Interested
      </button>
    </div>
  );
}
export default Card;
