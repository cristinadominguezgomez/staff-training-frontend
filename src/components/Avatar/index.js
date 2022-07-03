const Avatar = ({ avatar, username }) => {
  return (
    <>
      {avatar ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/${avatar}`}
          alt={username}
        />
      ) : (
        <img src={`http://localhost:3001/default-avatar.jpg`} alt={username} />
      )}
    </>
  );
};

export default Avatar;
