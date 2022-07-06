import { useState, useEffect } from "react";
import getAllEmployeesService from "../services/employees/getAllEmployeesService";

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        const data = await getAllEmployeesService();
        console.log("data", data);
        setEmployees(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  //   const removeEmployee = (id) => {
  //     setExercises(exercises.filter((exercise) => exercise.id !== id));
  //   };

  return { employees, loading, error };
};

export default useEmployees;
