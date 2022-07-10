import "../RegisterForm/style.css";
import { useState } from "react";
import { registerService } from "../../services/auth/registerService";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    pass1: "",
    pass2: "",
    avatar: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, type, value } = e.target;
    let inputValue = value;

    if (type === "file") {
      inputValue = URL.createObjectURL(e.target.files[0]);
    }
    setEmployeeData({
      ...employeeData,
      [name]: inputValue,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const dataForm = new FormData(e.target);

    setError("");

    if (employeeData.pass1 !== employeeData.pass2) {
      setError("Passwords do not match");
      return;
    }

    dataForm.delete("pass1");
    dataForm.delete("pass2");
    dataForm.append("password", employeeData.pass1);
    try {
      await registerService({ dataForm });
      alert("Successfully registered User. Check your email.");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form className="register" onSubmit={handleForm}>
        <legend>¿Are you employee and you don´t have an account yet?</legend>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={employeeData.name}
            required
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={employeeData.email}
            required
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            placeholder="Password"
            value={employeeData.pass1}
            required
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Repeat password</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            placeholder="Repeat password"
            value={employeeData.pass2}
            required
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="avatar">Image:</label>
          <div className="file-select">
            <input
              id="avatar"
              name="avatar"
              type="file"
              onChange={handleInputChange}
            />
          </div>
          {employeeData.avatar ? (
            <img
              width={50}
              heigth={50}
              src={employeeData.avatar}
              alt={employeeData.name}
            />
          ) : null}
        </fieldset>
        <button className="button">Register</button>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
};
