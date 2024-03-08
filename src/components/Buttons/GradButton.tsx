import styles from './style.module.scss';

interface ButtonProps {
  link: string;
  text: string;
  className?: string;
}

const GradButton: React.FC<ButtonProps> = ({ link, text, className }) => (
  <a href={link} className={`${styles.btnGrad} py-3 ${className}`}>
    {text}
  </a>
);

export default GradButton;
