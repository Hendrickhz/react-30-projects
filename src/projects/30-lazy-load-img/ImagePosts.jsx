import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import LazyLoadPost from "./LazyLoadPost";
const ImagePosts = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await api.json();
    const useData = data.splice(0, 30);
    setPosts(useData);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className=" container mx-auto my-20">
      <Title text={"Image Posts"} />
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <LazyLoadPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ImagePosts;
