import { useState } from "react";
import { newExercise } from "../../services/exercises/postNewExercise";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { useNavigate } from "react-router-dom";

export const CreateExerciseForm = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [type, setType] = useState("");
  // const [muscle_group, setMuscle_group] = useState("");
  const [error, setError] = useState("");
  const { token } = useEmployeeTokenContext();
  const navigate = useNavigate();

  const createExercise = async (e) => {
    e.preventDefault();
    try {
      const dataForm = new FormData(e.target); //contiene los datos del formulario

      const exercise = await newExercise({
        dataForm,
        token,
      });
      console.log(exercise);
      //me redireccione a la pagina del ejercicio creado (por su id)
      navigate(`/exercise/${exercise.id}`);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={createExercise}>
      <fieldset>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" />
      </fieldset>

      <fieldset>
        <label htmlFor="description">Description:</label>
        <input id="description" name="description" />
      </fieldset>

      <fieldset>
        <label htmlFor="type">Type of exercise:</label>
        <input id="type" name="type" />
      </fieldset>

      <fieldset>
        <label htmlFor="muscle_group">Muscle group worked:</label>
        <input id="muscle_group" name="muscle_group" />
      </fieldset>

      <fieldset>
        <label htmlFor="image">Image:</label>
        <input id="image" name="image" type="file" />
      </fieldset>

      <button>Create New Exercise</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};
