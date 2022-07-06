import { EmployeesList } from "../../components/EmployeesList";

import useEmployees from "../../hooks/useEmployees";

export const EmployeesPage = () => {
  const { employees, loading, error } = useEmployees();

  if (loading) return <p>Cargando employees...</p>;

  if (error) return <p>{error}</p>;

  console.log(employees, loading, error);

  return (
    <section>
      <h1>Employees Page</h1>

      <EmployeesList employees={employees} />
    </section>
  );
};
