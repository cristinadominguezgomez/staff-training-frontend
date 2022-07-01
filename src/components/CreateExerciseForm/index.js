import { useState } from "react";
import { newExercise } from "../../services/exercises/postNewExercise";
import { useEmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { useNavigate } from "react-router-dom";

export const CreateExerciseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [muscle_group, setMuscle_group] = useState("");
  const [error, setError] = useState("");
  const { token } = useEmployeeTokenContext();
  const navigate = useNavigate();

  const createExercise = async (e) => {
    try {
      e.preventDefault();

      const data = await newExercise({
        title,
        description,
        type,
        muscle_group,
        token,
      });

      console.log(data, "viene del body");
      //me redireccione a la pagina del ejercicio creado (por su id)
      navigate(`/exercise/${data.id}`);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={createExercise}>
      <fieldset>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="type">Type of exercise:</label>
        <input
          id="type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="muscle_group">Muscle group worked:</label>
        <input
          id="muscle_group"
          value={muscle_group}
          onChange={(e) => {
            setMuscle_group(e.target.value);
          }}
        />
      </fieldset>

      <button>Create New Exercise</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};
