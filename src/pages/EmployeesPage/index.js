import { EmployeesList } from "../../components/EmployeesList";
import { useContext } from "react";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";

import useEmployees from "../../hooks/useEmployees";

export const EmployeesPage = () => {
  const { employees, loading, error } = useEmployees();
  const { employee } = useContext(EmployeeTokenContext);

  if (loading) return <p>Cargando employees...</p>;

  if (error) return <p>{error}</p>;

  console.log(employees, loading, error);

  return employee && employee.role === "admin" ? (
    <section>
      <h1>Employees Page</h1>

      <EmployeesList employees={employees} />
    </section>
  ) : null;
};
