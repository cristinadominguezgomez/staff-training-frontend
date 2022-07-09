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
    <section>
      <h2>Register</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
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
            value={employeeData.pass2}
            required
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="avatar">Image:</label>
          <input
            id="avatar"
            name="avatar"
            type="file"
            onChange={handleInputChange}
          />
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
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
