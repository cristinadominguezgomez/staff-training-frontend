import { Exercise } from "../Exercise";
export const ExercisesList = ({ exercises }) => {
  return exercises.length ? (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <Exercise exercise={exercise} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay ejercicios todavia...</p>
  );
};
