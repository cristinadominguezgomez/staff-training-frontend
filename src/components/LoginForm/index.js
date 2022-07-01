import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { loginService } from "../../services/auth/loginService";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useEmployeeTokenContext();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    try {
      e.preventDefault();

      const token = await loginService({ email, password });

      setToken(token);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button>Login</button>
      </form>
    </>
  );
};
