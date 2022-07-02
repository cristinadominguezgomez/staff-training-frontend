export const newExercise = async ({ dataForm, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/exercises`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: dataForm,
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.message);
  }

  return body.data;
};
