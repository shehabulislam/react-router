import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const { name, website, address } = detail;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div>
      <h4>Name: {name}</h4>
      <h4>website: {website}</h4>
      <h4>city: {address?.city}</h4>
    </div>
  );
};

export default FriendDetail;
