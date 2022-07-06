import React from "react";
import { useLocation } from "react-router-dom";

const Generic = () => {
  const location = useLocation();
  return <div>coming soon {location.pathname} page ...</div>;
};

export default Generic;
