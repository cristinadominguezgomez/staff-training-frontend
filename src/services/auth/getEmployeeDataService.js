export const getEmployeeDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/employees/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
