import { ExercisesList } from "../../components/ExercisesList";
import useExercises from "../../hooks/useExercises";

export const ExercisesPage = () => {
  const { exercises, loading, error, removeExercise } = useExercises();

  if (loading) return <p>Cargando exercises...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Exercises Page</h2>
      <ExercisesList exercises={exercises} removeExercise={removeExercise} />
    </section>
  );
};
