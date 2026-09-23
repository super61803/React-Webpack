import styles from "./PageHeading.module.scss";

type PageHeadingProps = {
  title: string;
  lead: string;
};

const PageHeading = ({ title, lead }: PageHeadingProps) => {
  return (
    <header>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.lead}>{lead}</p>
    </header>
  );
};

export default PageHeading;
