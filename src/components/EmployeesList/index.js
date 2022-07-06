import { Employee } from "../Employee";

export const EmployeesList = ({ employees }) => {
  console.log("employees", employees);
  return employees && employees.length > 0 ? (
    <ul>
      {employees.map((employee) => (
        <li>
          {employees.map((employee) => (
            <li key={employee.id}>
              <Employee employee={employee} />
            </li>
          ))}
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no employees yet...</p>
  );
};
