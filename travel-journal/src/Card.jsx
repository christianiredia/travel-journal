import React from "react";
import Location from "./images/location.png";

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.imageUrl} alt="" />
      </div>
      <div>
        <img src={Location} alt="location logo" />
        <span>{props.location}</span>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
        <h1>{props.title}</h1>
        <p>
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
