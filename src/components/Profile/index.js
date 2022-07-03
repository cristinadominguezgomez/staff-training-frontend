import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { Navigate } from "react-router-dom";
import Avatar from "../Avatar";
// import useEmployee from "../../hooks/useEmployee";

export const Profile = () => {
  const { token, employee, loading, error } = useEmployeeTokenContext();

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
    <section>
      <h2>Employee profile</h2>

      {employee && (
        <>
          <Avatar avatar={employee?.avatar} username={employee?.name} />
          <p>Name: {employee?.name}</p>
          <p>Email: {employee?.email}</p>

          <section>
            <h2>My exercise favorites</h2>

            {/* <EntriesList entries={employee?.like} /> */}
          </section>
        </>
      )}
    </section>
  );
};
