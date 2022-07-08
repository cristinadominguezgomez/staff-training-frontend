import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <section>
      <h2>Not found</h2>
      <Link to={"/"}>Go to Home Page</Link>
    </section>
  );
};
