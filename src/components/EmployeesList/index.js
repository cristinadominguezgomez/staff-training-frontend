import { Employee } from "../Employee";
import { Link } from "react-router-dom";

export const EmployeesList = ({ employees }) => {
  console.log("employees", employees);
  return employees.length ? (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <Employee employee={employee} />
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay empleados todavia...</p>
  );
};
