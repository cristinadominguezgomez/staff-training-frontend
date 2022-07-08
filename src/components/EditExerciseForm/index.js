import getExerciseService from "../../services/exercises/getExerciseService";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { editExerciseService } from "../../services/exercises/editExerciseService";

export const EditExerciseForm = ({ id }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { token, employee } = useContext(EmployeeTokenContext);
  const [exerciseData, setExerciseData] = useState({
    title: "",
    description: "",
    type: "",
    muscle_group: "",
    image: "",
  });

  useEffect(() => {
    const getExercise = async () => {
      try {
        const data = await getExerciseService(id);

        setExerciseData({
          title: data.title || "",
          description: data.description || "",
          type: data.type || "",
          muscle_group: data.muscle_group || "",
          image: data.image
            ? `${process.env.REACT_APP_BACKEND}/${data.image}`
            : "",
        });
      } catch (error) {
        setError("there was an error in the request");
      }
    };
    getExercise();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, type, value } = e.target;
    let inputValue = value;

    if (type === "file") {
      // https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
      inputValue = URL.createObjectURL(e.target.files[0]);
    }
    setExerciseData({
      ...exerciseData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    const dataForm = new FormData(e.target);

    e.preventDefault();

    try {
      if (token) {
        editExerciseService({ id, token, dataForm });
        alert("Edited Exercise Successfully");
        navigate("/exercises");
      } else {
        alert("YOU HAVE TO LOG IN");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return employee && employee.role === "admin" ? (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={exerciseData.title}
          onChange={handleInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={exerciseData.description}
          onChange={handleInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="type">Type of exercise:</label>
        <input
          id="type"
          name="type"
          value={exerciseData.type}
          onChange={handleInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="muscle_group">Muscle group worked:</label>
        <input
          id="muscle_group"
          name="muscle_group"
          value={exerciseData.muscle_group}
          onChange={handleInputChange}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          name="image"
          type="file"
          onChange={handleInputChange}
        />
        {exerciseData.image ? (
          <img
            width={50}
            heigth={50}
            src={exerciseData.image}
            alt={exerciseData.title}
          />
        ) : null}
      </fieldset>

      <button className="button" type="submit">
        Edit Exercise
      </button>
      {error ? <p>{error}</p> : null}
    </form>
  ) : (
    <Link to={"/login"}>Logeate</Link>
  );
};
