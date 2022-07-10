import { Link } from "react-router-dom";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import Avatar from "../Avatar";
import "../Auth/style.css";

export const Auth = () => {
  const { employee, logout } = useEmployeeTokenContext();

  return employee ? (
    <div className="nav-profile">
      <Link to="/profile">
        <Avatar avatar={employee?.avatar} username={employee?.name} />
        <p>{employee.name}</p>
      </Link>
      <button className="button" onClick={() => logout()}>
        Logout
      </button>
    </div>
  ) : (
    <div className="buttons">
      <div>
        <Link to={"/register"}>
          <button className="button">Register</button>
        </Link>
      </div>
      <div>
        <Link to={"/login"}>
          <button className="button">Login</button>
        </Link>
      </div>
    </div>
  );
};
