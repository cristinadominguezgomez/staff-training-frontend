import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getAllExercisesService from "../services/exercises/getAllExercisesService";

const useExercises = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const queryString = searchParams.toString()
        const data = await getAllExercisesService(queryString);

        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadExercises();
  }, [searchParams, setSearchParams]);

  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  return { exercises, loading, error, removeExercise };
};

export default useExercises;
