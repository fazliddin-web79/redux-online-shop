import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="card-item">
      <p className="card-title">
        <span>Title: </span>
        {data.title}
      </p>
      <p className="card-price">
        <span>Price: </span>
        {data.price} $
      </p>
      <div className="card-rank">
        <p className="card-rank__rate">
          <span>Rate: </span>
          {data.rating.rate}
        </p>
        <p className="card-rank__count">
          <span>Count people: </span>
          {data.rating.count} liked
        </p>
      </div>
      <img className="card-img" src={data.image} alt="" />
      <button
        className="btn btn-info card-btn"
        onClick={() => navigate(`/products/${data.id}`)}
      >
        Show more
      </button>
    </div>
  );
};

export default memo(Card);
