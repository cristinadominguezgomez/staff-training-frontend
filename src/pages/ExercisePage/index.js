import { useParams } from "react-router-dom";
import { Exercise } from "../../components/Exercise";

import useExercise from "../../hooks/useExercise";
//import { Link } from "react-router-dom";

export const ExercisePage = () => {
  const { id } = useParams();

  const { exercise, loading, error } = useExercise(id);

  if (loading) return <p>Cargando exercises...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section>
      <Exercise exercise={exercise} />
    </section>
  );
};
