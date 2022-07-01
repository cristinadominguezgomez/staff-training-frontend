import { Link } from "react-router-dom";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";

export const Auth = () => {
  const { employee, logout } = useEmployeeTokenContext();

  return employee ? (
    <ul>
      <li>
        <Link to="/create/exercises">Create New Exercise</Link>
      </li>

      <li>
        <p>
          Logged in as {""}
          <Link to={`/employee/${employee.id}`}>{employee.email}</Link>
        </p>{" "}
        <button onClick={() => logout()}>Logout</button>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </ul>
  );
};
