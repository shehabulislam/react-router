import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const { title, body } = post;

  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  console.log({ post });

  return (
    <div>
      <h4>Single Post</h4>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostDetail;
