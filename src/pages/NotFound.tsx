import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={styles.panel}>
      <span className={styles.code} aria-hidden="true">
        404
      </span>
      <PageHeading
        title="Page not found"
        lead="That route is not part of this sample app."
      />
      <Link className={styles.link} to="/">
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
