import { Exercise } from "../Exercise";

export const ExercisesList = ({ exercises, removeExercise }) => {
  return exercises.length ? (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <Exercise exercise={exercise} removeExercise={removeExercise} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay ejercicios todavia...</p>
  );
};
