export const registerService = async ({ email, password, name }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/employees`, {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
