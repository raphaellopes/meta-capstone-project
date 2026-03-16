import styles from "./styles.module.css";
import ErrorIcon from "@components/icons/error";

interface ErrorFormFieldProps {
  message: string;
}

const ErrorFormField: React.FC<ErrorFormFieldProps> = ({ message }) => {
  return (
    <div className={styles.root}>
      <ErrorIcon />
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ErrorFormField;
