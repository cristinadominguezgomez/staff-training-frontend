import { useParams } from "react-router-dom";
import { Exercise } from "../../components/Exercise";

import useExercise from "../../hooks/useExercise";

export const ExercisePage = () => {
  const { id } = useParams();

  const { exercise, loading, error } = useExercise(id);

  if (loading) return <p>Cargando exercises...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Exercise</h1>
      <Exercise exercise={exercise} />
    </section>
  );
};
