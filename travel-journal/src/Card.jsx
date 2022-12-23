import React from "react";
import Location from "./images/location.png";
import "./card.css";

const Card = (props) => {
  return (
    <div className="travelContainer">
      <div>
        <img src={props.imageUrl} className="travelImg" alt="" />
      </div>
      <div>
        <img src={Location} className="locationLogo" alt="location logo" />
        <span className="country">{props.location}</span>
        <a href={props.googleMapsUrl} className="googleMaps">
          View on Google Maps
        </a>
        <h1 className="travelNames">{props.title}</h1>
        <p className="travelDates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="travelDescription">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
