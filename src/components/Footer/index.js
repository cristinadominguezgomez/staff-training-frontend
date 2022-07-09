import "../Footer/style.css";
export const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src="/../images/logo2.WEBP" alt="logo" />
        <p>STAFF TRAINING</p>
      </div>

      <ul className="regulations">
        <li>Aviso legal</li>
        <li>Política de privacidad</li>
        <li>Política de cookies</li>
      </ul>
      <p>Copyright ©2022. Todos los derechos reservados.</p>
    </footer>
  );
};
