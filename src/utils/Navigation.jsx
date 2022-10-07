import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const WithRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate} params={params} />;
  };
  return Wrapper;
};
