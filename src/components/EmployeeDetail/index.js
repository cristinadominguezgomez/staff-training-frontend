import { useParams } from "react-router-dom";
import useEmployee from "../../hooks/useEmployee";

export const EmployeeDetail = () => {
  const { id } = useParams();
  const { employee, loading, error } = useEmployee(id);
  const { avatar } = employee;
  console.log(avatar, "avatar");

  if (loading) return <p>cargando....</p>;
  if (error) return <p>error</p>;

  return (
    <section>
      <h1>Name: {employee.name}</h1>
      <p>Email: {employee.email}</p>
      <section>
        <p>Employee id: {employee.id}</p>
        <p>Registered on {new Date(employee.created_at).toLocaleString()}</p>
        {avatar ? (
          <img src={`${process.env.REACT_APP_BACKEND}/${avatar}`} alt={employee.name} />
        ) : null}
      </section>
    </section>
  );
};
