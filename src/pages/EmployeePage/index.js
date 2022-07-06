import { useParams } from "react-router-dom";
import { Employee } from "../../components/Employee";
import { useContext } from "react";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import useEmployee from "../../hooks/useEmployee";

export const EmployeePage = () => {
  const { id } = useParams();
  const { employee: employeeContext } = useContext(EmployeeTokenContext);
  const { employee, loading, error } = useEmployee(id);

  if (loading) return <p>Cargando empleado...</p>;

  if (error) return <p>{error}</p>;

  return employeeContext && employeeContext.role === "admin" ? (
    <section>
      <h1>Employee</h1>
      <Employee employee={employee} />
    </section>
  ) : null;
};
