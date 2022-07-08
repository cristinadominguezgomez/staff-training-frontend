export const registerService = async ({ dataForm }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/employees`, {
    method: "POST",
    body: dataForm,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
