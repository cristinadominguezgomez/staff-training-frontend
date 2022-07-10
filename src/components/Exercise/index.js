import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import useChekLike from "../../hooks/useCheckLike";
import { deleteExerciseService } from "../../services/exercises/deleteExerciseService";
import { likeExerciseService } from "../../services/exercises/likeExerciseService";
import "./style.css";

export const Exercise = ({ exercise, removeExercise }) => {
  const {
    title,
    created_at,
    image,
    id,
    likes: initialLikes,
    muscle_group,
    type,
  } = exercise;
  const { employee, token } = useContext(EmployeeTokenContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [likes, setLikes] = useState(initialLikes);
  const { didEmployeeLikeExercise, setDidEmployeeLikeExercise } =
    useChekLike(id);

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

  const likeExercise = async (e) => {
    try {
      e.preventDefault();

      likeExerciseService(id, token);

      setDidEmployeeLikeExercise(!didEmployeeLikeExercise);

      if (didEmployeeLikeExercise) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    employee && (
      <div className="exercise">
        <article>
          <h2>{title}</h2>
          <div className="exercise-type">
            <p>{muscle_group}</p>
            <p>{type}</p>
          </div>
          <div className="images">
            {image ? (
              <img
                src={`${process.env.REACT_APP_BACKEND}/${image}`}
                alt={title}
              />
            ) : null}
          </div>

          <p>
            <span>Created on:</span> {new Date(created_at).toLocaleDateString()}
          </p>
          {employee && employee.role === "admin" ? (
            <div className="buttons-exercise">
              <button
                className="button"
                onClick={() => deleteExercise(exercise.id)}
              >
                DELETE
              </button>

              <button
                className="button"
                onClick={() => {
                  navigate(`/exercises/${exercise.id}/edit`);
                }}
              >
                EDIT
              </button>
            </div>
          ) : (
            <>
              <p>LIKES: {likes}</p>
              <button className="button" onClick={likeExercise}>
                LIKE
              </button>
            </>
          )}
        </article>
        {error ? <p>{error}</p> : null}
      </div>
    )
  );
};
