import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import PostDetail from "../PostDetail/PostDetail";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h3>Posts</h3>
      {posts.map((post) => (
        <CustomLink key={post?.id} to={`/posts/${post?.id}`}>
          {post?.id}
        </CustomLink>
      ))}
      <Outlet />
    </div>
  );
};

export default Posts;
