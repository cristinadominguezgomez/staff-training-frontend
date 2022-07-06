const getAllEmployeesService = async () => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND}/employees`);

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }

  return body.data;
};

export default getAllEmployeesService;
