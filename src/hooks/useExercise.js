import { useState, useEffect } from "react";
import getExerciseService from "../services/exercises/getExerciseService";

const useExercise = (id) => {
  const [exercise, setExercise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadExercise = async () => {
      try {
        setLoading(true);
        const body = await getExerciseService(id);

        setExercise(body);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadExercise();
  }, [id]);

  return { exercise, loading, error };
};

export default useExercise;
