import { Employee } from "../Employee";
import { Link } from "react-router-dom";
import "../EmployeesList/style.css";

export const EmployeesList = ({ employees, removeEmployee }) => {
  return employees.length ? (
    <ul className="listEmployees">
      {employees.map((employee) => (
        <li key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <Employee employee={employee} removeEmployee={removeEmployee} />
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay empleados todavia...</p>
  );
};
