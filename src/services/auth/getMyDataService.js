export const getMyDataService = async (token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/employees/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
