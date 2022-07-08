import { ExercisesList } from "../../components/ExercisesList";
import useExercises from "../../hooks/useExercises";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { useContext } from "react";

export const ExercisesPage = () => {
  const { exercises, loading, error, removeExercise } = useExercises();
  const { employee } = useContext(EmployeeTokenContext);
  if (loading) return <p>Cargando exercises...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      {employee?.role === "admin" && (
        <section>
          <h2>Exercises Page</h2>
          <p>BUSCADOR</p>
          <ExercisesList
            exercises={exercises}
            removeExercise={removeExercise}
          />
        </section>
      )}

      {employee ? (
        <section>
          <h2>Exercises Page</h2>
          <p>BUSCADOR</p>
          <ExercisesList exercises={exercises} />
        </section>
      ) : (
        <p>
          To view the exercises on our page, you must be a member of our team
          and be registered
        </p>
      )}
    </>
  );
};
