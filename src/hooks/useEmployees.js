import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getAllEmployeesService from "../services/employees/getAllEmployeesService";

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        const data = await getAllEmployeesService();
        setEmployees(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const removeEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    alert("Employee Removed Successfully");
    navigate("/employees");
  };

  return { employees, loading, error, removeEmployee };
};

export default useEmployees;
