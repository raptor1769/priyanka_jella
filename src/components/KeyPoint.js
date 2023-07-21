import React from "react";

const KeyPoint = ({ image, heading, title, desc }) => {
  const cardStyle = {
    width: "200px",
    height: "200px",
    margin: "10px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid white",
  };
  return (
    <div className="card" style={cardStyle}>
      {title.length > 0 && <div className="title-bar">{title}</div>}
      <img src={image} />
      <h3>{heading}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default KeyPoint;
