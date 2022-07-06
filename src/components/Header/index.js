import { Auth } from "../../components/Auth";
import { Link } from "react-router-dom";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";

export const Header = () => {
  const { employee } = useEmployeeTokenContext();

  return (
    <header>
      <h1>
        <Link to="/">Staff Training</Link>
      </h1>
      <nav>
        <Auth />
        <ul>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/exercises">Ver ejercicios</Link>
          </li>
        </ul>
        {employee && employee.role === "admin" ? (
          <ul>
            <li>
              <Link to="/create/exercises">Create New Exercise</Link>
            </li>
            <li>
              <Link to="/employees">Listado empleados</Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};
