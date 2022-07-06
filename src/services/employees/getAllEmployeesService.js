const getAllEmployeesService = async () => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND}/employees`);

  const body = await res.json();
  console.log(body.data);

  if (!res.ok) {
    console.log(body.message);
    throw new Error(body.message);
  }

  return body.data;
};

export default getAllEmployeesService;
