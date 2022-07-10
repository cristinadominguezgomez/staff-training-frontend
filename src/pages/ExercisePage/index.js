import { useParams } from "react-router-dom";
import { Exercise } from "../../components/Exercise";
import { useContext } from "react";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import useExercise from "../../hooks/useExercise";
import "./style.css";
//import { Link } from "react-router-dom";

export const ExercisePage = () => {
  const { id } = useParams();
  const { employee } = useContext(EmployeeTokenContext);
  const { exercise, loading, error } = useExercise(id);

  if (loading) return <p>Cargando exercises...</p>;

  if (error) return <p>{error}</p>;

  return employee ? (
    <section class="detail-exercise">
      <Exercise exercise={exercise} />
      <p className="description">{exercise.description}</p>
    </section>
  ) : (
    <p>
      To view the exercises on our page, you must be a member of our team and be
      registered
    </p>
  );
};
