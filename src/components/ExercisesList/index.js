import { Exercise } from "../Exercise";
import { Link } from "react-router-dom";
export const ExercisesList = ({ exercises }) => {
  return exercises.length ? (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <Link to={`/exercise/${exercise.id}`}>
            <Exercise exercise={exercise} />
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay ejercicios todavia...</p>
  );
};
