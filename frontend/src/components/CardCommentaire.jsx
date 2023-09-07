import PropTypes from "prop-types";

const CardCommentaire = ({ user, content, creationdate }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h1>{user}</h1>
        <p>{creationdate}</p>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

CardCommentaire.propTypes = {
  user: PropTypes.string,
  content: PropTypes.string,
  creationdate: PropTypes.instanceOf(Date),
};

CardCommentaire.defaultProps = {
  user: "user",
  content: "content",
  creationdate: "creationdate",
};

export default CardCommentaire;
