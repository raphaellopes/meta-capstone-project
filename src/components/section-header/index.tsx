import classNames from "classnames";
import styles from "./styles.module.css";

type VariantType = "default" | "primary-base" | "primary-highlight";
type TitleAs = "h1" | "h2" | "h3";

interface SectionHeaderProps {
  variant?: VariantType;
  className?: string;
  title: string;
  titleAs?: TitleAs;
  subtitle?: string;
  subtitleAs?: TitleAs;
  right?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  variant = "default",
  className,
  title,
  titleAs: TitleAs = "h1",
  subtitle,
  subtitleAs: SubtitleAs = "h2",
  right,
}) => {
  const titleClassName = {
    default: styles.titleDefault,
    "primary-base": styles.titlePrimaryBase,
    "primary-highlight": styles.titlePrimaryHighlight,
  }[variant];

  const subtitleClassName = {
    default: styles.subtitleDefault,
    "primary-base": styles.subtitlePrimaryBase,
    "primary-highlight": styles.subtitlePrimaryHighlight,
  }[variant];

  return (
    <header className={classNames(styles.root, className)}>
      <div>
        <TitleAs className={classNames(styles.title, titleClassName)}>
          {title}
        </TitleAs>
        {subtitle && (
          <SubtitleAs
            className={classNames(styles.subtitle, subtitleClassName)}
          >
            {subtitle}
          </SubtitleAs>
        )}
      </div>
      {right && <div className="section-header-right">{right}</div>}
    </header>
  );
};

export default SectionHeader;
