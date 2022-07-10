import { Link } from "react-router-dom";
import "./style.css"
export const NotFoundPage = () => {
  return (
    // https://codepen.io/sqfreakz/pen/GJRJOY
    <section className="not-found">
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">THE PAGE</div>
        <div className="_2">WAS NOT FOUND</div>
        <Link className="btn" to={"/"}>
          GO TO HOME
        </Link>
      </div>
    </section>
  );
};
