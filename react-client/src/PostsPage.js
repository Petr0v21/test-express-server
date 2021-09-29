import React, { useEffect, useState } from "react";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/users", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((res) => {
            setPosts(res.posts);
          });
      }, []);
      return(
        <div>
        {posts.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
      );
};

export default PostsPage;