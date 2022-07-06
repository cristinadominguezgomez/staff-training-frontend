export const Employee = ({ employee }) => {
  const { name, email, created_at, active, avatar } = employee;

  return (
    <article>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {avatar ? (
        <img src={`${process.env.REACT_APP_BACKEND}/${avatar}`} alt={name} />
      ) : null}
      <p>Created on: {new Date(created_at).toLocaleDateString()}</p>
      <p>Active: {active}</p>
      {/* 
      {employee && role === "admin" ? (
        <section>
          <button>Detete employee</button>
        </section>
      ) : null} */}
    </article>
  );
};
