import { EmployeesList } from "../../components/EmployeesList";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import useEmployees from "../../hooks/useEmployees";
import { useContext } from "react";

export const EmployeesPage = () => {
  const { employees, loading, error, removeEmployee } = useEmployees();
  const { employee: employeeContext } = useContext(EmployeeTokenContext);

  if (loading) return <p>Cargando employees...</p>;

  if (error) return <p>{error}</p>;

  return employeeContext && employeeContext.role === "admin" ? (
    <section>
      <h1>Employees Page</h1>

      <EmployeesList employees={employees} removeEmployee={removeEmployee} />
    </section>
  ) : null;
};
