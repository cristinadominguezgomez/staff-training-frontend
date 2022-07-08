import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";

export const HomePage = () => {
  const { employee } = useEmployeeTokenContext();

  return (
    <>
      {employee?.role === "admin" && (
        <div>
          <p>landing page para administrador</p>
        </div>
      )}
      {employee ? (
        <p>landing page para usuario normal</p>
      ) : (
        <>
          <p>landing page para personas no logueadas</p>
          <h2>Home Page</h2>
          <p>Welcome to staff training. </p>
          <p>
            If you are a member of our work team, you can register and log in to
            see all the exercises that are available on our page, to help you
            plan your classes and training.
          </p>

          <p> Thank you!</p>
        </>
      )}
    </>
  );
};
