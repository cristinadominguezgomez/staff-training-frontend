import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { loginService } from "../../services/auth/loginService";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { setToken } = useEmployeeTokenContext();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    try {
      e.preventDefault();
      setError("");

      const token = await loginService({ email, password });

      setToken(token);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="button">Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};
