import { Link } from "react-router-dom";
import { Exercise } from "../Exercise";

export const ExercisesList = ({ exercises, removeExercise }) => {
  return exercises.length ? (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <Link to={`/exercise/${exercise.id}`}>
            <Exercise exercise={exercise} removeExercise={removeExercise} />
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay ejercicios todavia...</p>
  );
};
