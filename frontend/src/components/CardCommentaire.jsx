import PropTypes from "prop-types";

const CardCommentaire = ({ user, content, creationdate }) => {
  return (
    <div className="flex flex-col text-black py-4 mt-8 lg:mt-20 mx-4 lg:mx-16 px-4 lg:px-16 text-justify border-2 border-accent rounded-2xl">
      <div className="flex justify-between gap-8 items-center mb-8 font-megrim">
        <h1 className="font-bold text-lg">{user}</h1>
        <p>{creationdate}</p>
      </div>
      <div className="font-roboto">
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
