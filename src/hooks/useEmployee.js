import { useEffect, useState } from "react";
import { getEmployeeDataService } from "../services/auth/getEmployeeDataService";

const useEmployee = (id) => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmplyee = async () => {
      try {
        setLoading(true);
        const data = await getEmployeeDataService(id);

        setEmployee(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadEmplyee();
  }, [id]);

  return { employee, error, loading };
};

export default useEmployee;
