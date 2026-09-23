import PageHeading from "../components/PageHeading";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.stack}>
      <PageHeading
        title="About"
        lead="Use this repo as a clean starting point and replace the sample pages with your own features."
      />
      <p className={styles.panel}>
        Included stack: React 18, React Router, TypeScript, Sass (global + CSS
        modules), Babel, and Webpack 5 with a production build and asset copy
        step.
      </p>
      <pre className={styles.code}>
        <code>{`npm start    # webpack-dev-server
npm run build
npm run typecheck`}</code>
      </pre>
    </section>
  );
};

export default About;
