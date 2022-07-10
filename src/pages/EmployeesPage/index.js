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
    <section className="container">
      <h2>Employees Page</h2>

      <EmployeesList employees={employees} removeEmployee={removeEmployee} />
    </section>
  ) : (
    <p>
      To view our team of professionals you must be an administrator of this
      page
    </p>
  );
};
