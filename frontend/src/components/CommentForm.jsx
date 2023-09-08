import PropTypes from "prop-types";

import { useState } from "react";
import axios from "axios";

const CommentForm = ({ labyrintheToggle, mauvaisGoutToggle, zoomToggle }) => {
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const postContent = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/message", {
        user,
        content,
      })
      .then((res) => {
        if (res.status === 201) {
          setUser("");
          setContent("");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      id="commentaires"
      className={`" flex items-center justify-center shadow-lg mt-56 mx-8 mb-4 " ${
        labyrintheToggle && "animate-spin-slow"
      } ${mauvaisGoutToggle && ""} ${zoomToggle && "text-9xl"}`}
    >
      <form className="w-full  bg-white rounded-lg px-4 pt-2 ">
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Poste ton commentaire
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            {" "}
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-40 h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="user"
              placeholder="pseudo..."
              value={user}
              onChange={handleUserChange}
              required
            ></textarea>
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Comment..."
              value={content}
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start px-3">
            <div className="-mr-1 w-full">
              <button
                type="button"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                onClick={postContent}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  labyrintheToggle: PropTypes.bool.isRequired,
  mauvaisGoutToggle: PropTypes.bool.isRequired,
  zoomToggle: PropTypes.bool.isRequired,
};

export default CommentForm;
