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
    <section className="employe">
      <Employee employee={employee} />
    </section>
  ) : (
    <p>
      To view our team of professionals you must be an administrator of this
      page
    </p>
  );
};
