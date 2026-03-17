import SectionHeader from "@components/section-header";
import styles from "./styles.module.css";

const LoginSection = () => {
  return (
    <section id="login" className={styles.root}>
      <div className="container">
        <SectionHeader title="Login" variant="primary-base" />
        <div className={styles.loginContent}>
          <p>Apply form for login</p>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
