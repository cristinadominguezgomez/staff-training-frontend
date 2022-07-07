const deleteEmployeeService = async ({ id, token }) => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND}/employees/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }
};

export default deleteEmployeeService;
