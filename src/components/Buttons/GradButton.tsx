import styles from './style.module.scss';

interface ButtonProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}

const GradButton: React.FC<ButtonProps> = ({ link, children, className }) => (
  <div className={`${styles.btnGrad}`}>
    <a href={link} className={`py-3 ${className}`}>
      {children}
    </a>
  </div>
);

export default GradButton;
