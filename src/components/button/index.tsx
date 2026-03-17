import classNames from "classnames";
import styles from "./styles.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={classNames(styles.root, className)} {...props} />;
};

export default Button;
