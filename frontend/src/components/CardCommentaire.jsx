import PropTypes from "prop-types";

const CardCommentaire = ({ user, message, creationdate }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h1>{user}</h1>
        <p>{creationdate}</p>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

CardCommentaire.propTypes = {
  user: PropTypes.string,
  message: PropTypes.string,
  creationdate: PropTypes.instanceOf(Date),
};

CardCommentaire.defaultProps = {
  user: "user",
  message: "message",
  creationdate: "creationdate",
};

export default CardCommentaire;
