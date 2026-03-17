import styles from "./styles.module.css";
import PageContainer from "@components/page-container";

const LoginSection = () => {
  return (
    <PageContainer id="login" title="Login">
      <div className={styles.loginContent}>
        <p>Apply form for login</p>
      </div>
    </PageContainer>
  );
};

export default LoginSection;
