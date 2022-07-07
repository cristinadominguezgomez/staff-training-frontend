import { useState, useEffect } from "react";
import { useEmployeeTokenContext } from "../context/EmployeeTokenContext";

const useChekLike = (exerciseId) => {
  const [didEmployeeLikeExercise, setDidEmployeeLikeExercise] = useState(false);

  const [error, setError] = useState("");

  const { token } = useEmployeeTokenContext;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/entrie/${exerciseId}/checkLike`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const body = await res.json();

        if (res.ok) {
          setDidEmployeeLikeExercise(body.data.didEmployeeLike);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    token && fetchData();
  }, [token, exerciseId]);

  return { didEmployeeLikeExercise, setDidEmployeeLikeExercise, error };
};

export default useChekLike;
