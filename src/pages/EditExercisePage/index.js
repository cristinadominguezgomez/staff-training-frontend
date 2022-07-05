import { useParams } from "react-router-dom";
import { EditExerciseForm } from "../../components/EditExerciseForm";

export const EditExercisePage = () => {
      const { id } = useParams();

  return (
    <section>
      <h2>Editar Exercise </h2> <EditExerciseForm id={id} />
    </section>
  );
};

export default EditExercisePage;
