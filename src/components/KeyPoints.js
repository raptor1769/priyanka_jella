import React from "react";
import { itemData } from "../data";
import KeyPoint from "./KeyPoint";

const KeyPoints = () => {
  const divStyle = {
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "10px 30px",
  };
  return (
    <div className="items-container" style={divStyle}>
      {itemData.map((item) => (
        <KeyPoint
          key={item.id}
          image={item.image}
          heading={item.heading}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default KeyPoints;
