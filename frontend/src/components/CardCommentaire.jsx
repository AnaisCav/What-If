import PropTypes from "prop-types";

const CardCommentaire = ({ user, content, creationdate }) => {
  return (
    <div className="flex flex-col text-black py-4 mt-8 lg:mt-20 mx-4 lg:mx-0 px-4 lg:px-10 border-2 border-accent rounded-2xl">
      <div className="flex justify-between items-center font-megrim font-bold text-xl lg:text-2xl border-b-2 border-accent pb-2 lg:pb-6">
        <h1>{user}</h1>
        <p>{creationdate.split("T")[0]}</p>
      </div>
      <div className="font-roboto lg:text-xl mt-6 lg:mt-10 mb-2 lg:mb-6">
        <p>{content}</p>
      </div>
    </div>
  );
};

CardCommentaire.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  creationdate: PropTypes.string.isRequired,
};

export default CardCommentaire;
