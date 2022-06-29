export const Exercise = ({ exercise }) => {
  const { title, description, type, created_at, muscle_group, image } =
    exercise;
  return (
    <article>
      <p>{title}</p>
      <p>{description}</p>
      <p>{type}</p>
      <p>{muscle_group}</p>
      {image ? (
        <img src={`${process.env.REACT_APP_BACKEND}/${image}`} alt={title} />
      ) : null}
      <p>Created on: {new Date(created_at).toLocaleDateString()}</p>
    </article>
  );
};
