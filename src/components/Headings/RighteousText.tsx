import { Righteous } from 'next/font/google';
const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });
import './style.scss';
import { forwardRef } from 'react';

interface RighteousTextProps {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

const RighteousText = forwardRef<HTMLElement, RighteousTextProps>(
  ({ tag: Tag, children, className }, ref) => (
    <Tag className={[righteous.className, className].join(' ')} ref={ref as any}>
      {children}
    </Tag>
  )
);

RighteousText.displayName = 'RighteousText';

export default RighteousText;
