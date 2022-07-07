import { EmployeesList } from "../../components/EmployeesList";

import useEmployees from "../../hooks/useEmployees";

export const EmployeesPage = () => {
  const { employees, loading, error, removeEmployee } = useEmployees();

  if (loading) return <p>Cargando employees...</p>;

  if (error) return <p>{error}</p>;

  return employees ? (
    <section>
      <h1>Employees Page</h1>

      <EmployeesList employees={employees} removeEmployee={removeEmployee} />
    </section>
  ) : null;
};
