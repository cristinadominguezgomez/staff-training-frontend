import "../Profile/style.css";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { Navigate } from "react-router-dom";

export const Profile = () => {
  const { token, employee, loading, error } = useEmployeeTokenContext();
  const { avatar } = employee;

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <p>{loading}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="profile">
      <h2>Profile</h2>

      {employee && (
        <>
          {avatar ? (
            <div>
              <img
                src={`${process.env.REACT_APP_BACKEND}/${avatar}`}
                alt={employee.name}
              />
            </div>
          ) : null}
          <p>Name: {employee?.name}</p>
          <p>Email: {employee?.email}</p>
        </>
      )}
    </section>
  );
};
