import { Auth } from "../../components/Auth";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Staff Training</Link>
      </h1>
      <nav>
        <Auth />
        <ul>
          <li>
            <Link to="/exercises">Ver ejercicios</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
