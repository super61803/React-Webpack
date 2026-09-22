import { Link } from "react-router-dom";
import styles from "../App.module.scss";

const NotFound = () => {
  return (
    <p className={styles.message}>
      Page not found. <Link to="/">Go home</Link>
    </p>
  );
};

export default NotFound;
