import styles from "./styles.module.css";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className={styles.root}>
    <img className={styles.avatarImg} src={src} alt={alt} />
  </div>
);

export default Avatar;
