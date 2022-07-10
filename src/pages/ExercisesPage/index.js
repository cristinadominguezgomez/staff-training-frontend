import { ExercisesList } from "../../components/ExercisesList";
import useExercises from "../../hooks/useExercises";
import { EmployeeTokenContext } from "../../context/EmployeeTokenContext";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { Select } from "antd";

export const ExercisesPage = () => {
  const { Option } = Select;

  const [muscleGroup, setMuscleGroup] = useState();
  const handleMuscleGroupChange = (value) => {
    setMuscleGroup(value);
  };

  const [type, setType] = useState();
  const handleTypeChange = (value) => {
    setType(value);
  };

  const navigate = useNavigate();
  const { exercises, loading, error, removeExercise } = useExercises();
  const { employee } = useContext(EmployeeTokenContext);
  if (loading) return <p>Cargando exercises...</p>;

  if (error) return <p>{error}</p>;

  const onSubmit = () => {
    let url = `/exercises/?`;
    if (muscleGroup) {
      url += `&muscleGroup=${muscleGroup}`;
    }
    if (type) {
      url += `&type=${type}`;
    }

    navigate(url);
  };

  const onReset = () => {
    setType(null);
    setMuscleGroup(null);
    navigate("/exercises");
  };

  return (
    <>
      {employee ? (
        <section className="container">
          <div className="exercises">
            <aside className="aside">
              <fieldset>
                <label htmlFor="type">Type</label>
                <Select
                  placeholder="Select type"
                  value={type}
                  onChange={handleTypeChange}
                >
                  <Option value="aerobic">Aerobic</Option>
                  <Option value="strength">Strength</Option>
                  <Option value="balance">Balance</Option>
                  <Option value="flexibility">Flexibility</Option>
                </Select>
              </fieldset>

              <fieldset>
                <label htmlFor="muscle_group">Muscle group</label>
                <Select
                  placeholder="Select muscle group"
                  value={muscleGroup}
                  onChange={handleMuscleGroupChange}
                >
                  <Option value="abdominals">Abdominals</Option>
                  <Option value="chest">Chest</Option>
                  <Option value="back">Back</Option>
                  <Option value="arms">Arms</Option>
                  <Option value="legs">Legs</Option>
                  <Option value="shoulders">Shoulders</Option>
                </Select>
              </fieldset>

              <div className="filters-buttons">
                <button
                  className="button"
                  onClick={onReset}
                  as="input"
                  type="button"
                >
                  Reset
                </button>
                <button
                  className="button"
                  onClick={onSubmit}
                  as="input"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </aside>
            <div className="content">
              <div className="button-new-exercise">
                <Link to={"/create/exercises"}>
                  <button className="button">Create New</button>
                </Link>
              </div>
              <ExercisesList
                exercises={exercises}
                removeExercise={removeExercise}
              />
            </div>
          </div>
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
