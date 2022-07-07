import "../Avatar/style.css";

const Avatar = ({ avatar, username }) => {
  return (
    <>
      {avatar ? (
        <img
          className="avatar"
          src={`${process.env.REACT_APP_BACKEND}/${avatar}`}
          alt={username}
        />
      ) : (
        // <img
        //   className="avatar"
        //   src={`http://localhost:3001/default-avatar.jpg`}
        //   alt={username}
        // />
        <img className="avatar" src="/../images/default-avatar.jpg" alt={username} />
      )}
    </>
  );
};
export default Avatar;
