import { useState, useContext } from "react";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import deleteEmployeeService from "../../services/employees/deleteEmployeeService";

export const Employee = ({ employee, removeEmployee }) => {
  const { token } = useContext(EmployeeTokenContext);

  const [error, setError] = useState();

  const { id, name, email, created_at, active, avatar } = employee;

  const deleteEmployee = async (id) => {
    try {
      await deleteEmployeeService({ id, token });

      removeEmployee(id);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {avatar ? (
        <img src={`${process.env.REACT_APP_BACKEND}/${avatar}`} alt={name} />
      ) : null}
      <p>Created on: {new Date(created_at).toLocaleDateString()}</p>
      <p>Active: {active}</p>
      <section>
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            deleteEmployee(id);
          }}
        >
          Delete employee
        </button>
        {error ? <p>{error}</p> : null}
      </section>
    </article>
  );
};
