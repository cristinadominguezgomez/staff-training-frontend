import "../LoginForm/style.css";
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

      // setEmail("");
      // setPassword("");

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const onReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form className="login" onSubmit={handleForm}>
        <legend>If you are registered, log in</legend>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <p>¿forgot your password?</p>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <button onClick={onReset} className="button">
            Login
          </button>
        </fieldset>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
};
