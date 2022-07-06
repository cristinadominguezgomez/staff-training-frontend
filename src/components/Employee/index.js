import { useState } from "react";

export const Employee = ({ employee }) => {
  const { name, email, created_at, active, avatar, role } = employee;

  const [error, setError] = useState();

  return (
    <article>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {avatar ? (
        <img src={`${process.env.REACT_APP_BACKEND}/${avatar}`} alt={name} />
      ) : null}
      <p>Created on: {new Date(created_at).toLocaleDateString()}</p>
      <p>Active: {active}</p>

      {employee && role === "admin" ? (
        <section>
          {/* <button>Delete employee</button> */}
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
