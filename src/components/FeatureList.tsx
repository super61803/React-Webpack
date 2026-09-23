import styles from "./FeatureList.module.scss";

export type Feature = {
  title: string;
  description: string;
};

type FeatureListProps = {
  features: Feature[];
};

const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <ul className={styles.list}>
      {features.map((feature) => (
        <li key={feature.title} className={styles.item}>
          <h2 className={styles.title}>{feature.title}</h2>
          <p className={styles.description}>{feature.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
