import './styles.css';

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar:React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="avatar">
    <img className="avatar-img" src={src} alt={alt} />
  </div>
);

export default Avatar;