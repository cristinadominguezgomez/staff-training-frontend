import "../HomePage/style.css";
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
          <div className="home">
            <div className="message">
              <h2>Home Page</h2>
              <h4>Welcome to staff training. </h4>
              <p>
                If you are a member of our work team, you can register and log
                in to see all the exercises that are available on our page, to
                help you plan your classes and training.
              </p>

              <p> Thank you!</p>
            </div>

            <div className="table">
              <h2>Horario de Apertura</h2>
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Hour</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>7 a.m. / 11 p.m.</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>8 a.m. / 12 p.m.</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>7 a.m. / 11 p.m.</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>8 a.m. / 12 p.m.</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>7 a.m. / 11 p.m.</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>7 a.m. / 3 p.m.</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>CLOSED</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};
