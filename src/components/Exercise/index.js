import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import useChekLike from "../../hooks/useCheckLike";
import { deleteExerciseService } from "../../services/exercises/deleteExerciseService";
import { likeExerciseService } from "../../services/exercises/likeExerciseService";

export const Exercise = ({ exercise, removeExercise }) => {
  const {
    title,
    description,
    type,
    created_at,
    muscle_group,
    image,
    id,
    likes: initialLikes,
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
      <>
        <article>
          <h2>{title}</h2>
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

            <button
              onClick={() => {
                navigate(`/exercises/${exercise.id}/edit`);
              }}
            >
              EDIT EXERCISE
            </button>
          </div>
        ) : (
          <>
            <p>LIKES: {likes}</p>
            <button onClick={likeExercise}>LIKE</button>
          </>
        )}
        {error ? <p>{error}</p> : null}
      </>
    )
  );
};
