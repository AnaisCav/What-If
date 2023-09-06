import axios from "axios";

import CardCommentaire from "./CardCommentaire";
import { useEffect, useState } from "react";

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="text-black py-8 mt-8 lg:mt-20 mx-4 lg:mx-16 px-4 lg:px-16 text-justify border-2 border-accent rounded-2xl">
      <h1 className="font-megrim text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
        Forum
      </h1>
      <div>
        {posts &&
          posts.map((post) => (
            <CardCommentaire
              key={post.id}
              user={post.user}
              message={post.message}
              creationdate={post.creationdate}
            />
          ))}
      </div>
    </div>
  );
};

export default Forum;