import { Righteous } from 'next/font/google';
const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });
import './style.scss';

interface RighteousTextProps {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

const RighteousText: React.FC<RighteousTextProps> = ({
  tag: Tag,
  children,
  className,
}) => (
  <Tag className={[righteous.className, className].join(' ')}>{children}</Tag>
);

export default RighteousText;
