import { CreateExerciseForm } from "../../components/CreateExerciseForm";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { useContext } from "react";

export const CreateExercisePage = () => {
  const { employee } = useContext(EmployeeTokenContext);

  return (
    employee?.role === "admin" && (
      <section className="newExercise">
        <h2>Create New Exercise </h2> <CreateExerciseForm />
      </section>
    )
  );
};

export default CreateExercisePage;
