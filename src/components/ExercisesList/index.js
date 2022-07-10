import { Link } from "react-router-dom";
import { Exercise } from "../Exercise";
import "./style.css"

export const ExercisesList = ({ exercises, removeExercise }) => {
  return exercises.length ? (
    <ul className="list-exercises">
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
