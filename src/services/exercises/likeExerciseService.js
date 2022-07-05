export const likeExerciseService = async (id, token) => {
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercise/${id}/like`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const body = await res.json();
  if (!res.ok) {
    throw new Error(body.message);
  }
  return body.data;
};

export default likeExerciseService;
