import classNames from "classnames";

import SectionHeader from "@components/section-header";
import styles from "./styles.module.css";

interface PageContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  id,
  title,
  children,
  className,
}) => {
  return (
    <section id={id} className={classNames(styles.root, className)}>
      <div className="container">
        <SectionHeader title={title} variant="primary-base" />
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default PageContainer;
