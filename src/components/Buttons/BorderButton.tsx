import styles from './style.module.scss';

interface ButtonProps {
  link: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const BorderButton: React.FC<ButtonProps> = ({ link, children, className, target }) => (
  <div className={`border-btn ${styles.btnBorder}`}>
    <a href={link} className={`py-3 ${className}`} target={target}>
      {children}
    </a>
  </div>
);

export default BorderButton;
