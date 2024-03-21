import styles from './style.module.scss';

interface ButtonProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}

const BorderButton: React.FC<ButtonProps> = ({ link, children, className }) => (
  <div className={`border-btn ${styles.btnBorder}`}>
    <a href={link} className={`py-3 ${className}`}>
      {children}
    </a>
  </div>
);

export default BorderButton;
