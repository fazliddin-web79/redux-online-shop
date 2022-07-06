import React from "react";
import Card from "../Card";
import "./style.css";

const Body = ({ data }) => {
  return (
    <div className="d-flex flex-wrap  cards-wrap">
      {data.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
    </div>
  );
};

export default Body;
