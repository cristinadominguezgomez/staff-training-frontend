import { Link } from "react-router-dom";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";

export const Auth = () => {
  const { employee, logout } = useEmployeeTokenContext();

  return employee ? (
    <section>
      Logged in as <Link to={`/employee/${employee.id}`}>{employee.email}</Link>{" "}
      <button onClick={() => logout()}>Logout</button>
    </section>
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
