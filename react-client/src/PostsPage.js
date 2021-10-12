import React, { useEffect, useState } from "react";
import LoadingIcon from "./Loading";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(true)
    useEffect(() => {
        fetch("http://localhost:4000/users", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((res) => {
            setTimeout(() => {
              setLoad(false)
            }, 4000);
            setPosts(res.posts)
          });
      }, []);
      if (load) {
        return <div><LoadingIcon/></div>
      } else { 
         return(
          <div>
          {posts.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))}
          
        </div>
        );
      };
};

export default PostsPage;