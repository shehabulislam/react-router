import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/friend/${id}`);
  };
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={showDetails}>{username}</button>
    </div>
  );
};

export default Friend;
