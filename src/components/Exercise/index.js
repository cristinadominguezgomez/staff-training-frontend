import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { deleteExerciseService } from "../../services/exercises/deleteExerciseService";
import { likeExerciseService } from "../../services/exercises/likeExerciseService";

export const Exercise = ({ exercise, removeExercise }) => {
  const { title, description, type, created_at, muscle_group, image, id } =
    exercise;
  const { employee, token } = useContext(EmployeeTokenContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteExercise = async (id) => {
    try {
      await deleteExerciseService({ id, token });
      alert("Ejercicio eliminado");
      removeExercise(id);
      navigate(`/exercises`);
    } catch (error) {
      setError(error.message);
    }
  };

  const likeExercise = async () => {
    try {
      likeExerciseService(id, token);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    employee && (
      <>
        <article>
          <Link to={`/exercise/${exercise.id}`}>
            <p>{title}</p>
          </Link>

          <p>{description}</p>
          <p>{type}</p>
          <p>{muscle_group}</p>
          {image ? (
            <img
              src={`${process.env.REACT_APP_BACKEND}/${image}`}
              alt={title}
            />
          ) : null}
          <p>Created on: {new Date(created_at).toLocaleDateString()}</p>
        </article>
        {employee && employee.role === "admin" ? (
          <div>
            <button onClick={() => deleteExercise(exercise.id)}>
              DELETE EXERCISE
            </button>
            <Link to={`/exercises/${exercise.id}/edit`}>
              <button>EDIT EXERCISE</button>
            </Link>
          </div>
        ) : (
          <button onClick={likeExercise}>LIKE</button>
        )}
        {error ? <p>{error}</p> : null}
      </>
    )
  );
};
