import { Link } from "react-router-dom";
import FeatureList from "../components/FeatureList";
import PageHeading from "../components/PageHeading";
import styles from "./Home.module.scss";

const features = [
  {
    title: "Webpack tooling",
    description: "Dev server and production builds without Create React App.",
  },
  {
    title: "TypeScript",
    description: "Strict typing with Babel + tsc for editor and CI checks.",
  },
  {
    title: "Sass modules",
    description: "Scoped component styles plus shared design tokens.",
  },
];

const Home = () => {
  return (
    <section>
      <PageHeading
        title="Build React apps faster"
        lead="A starter with Webpack, TypeScript, Sass modules, and React Router already wired."
      />
      <FeatureList features={features} />
      <div className={styles.actions}>
        <Link className={styles.primary} to="/about">
          About this starter
        </Link>
        <a
          className={styles.secondary}
          href="https://webpack.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          Webpack docs
        </a>
      </div>
    </section>
  );
};

export default Home;
