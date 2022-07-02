export const newExercise = async ({
  title,
  description,
  type,
  muscle_group,
  token,
}) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/exercises`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description, type, muscle_group }),
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.message);
  }

  return body.data;
};
