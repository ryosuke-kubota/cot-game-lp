import { Righteous } from 'next/font/google';
const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });
import './style.scss';
import { Ref, RefObject, forwardRef } from 'react';

interface RighteousTextProps {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  ref: RefObject<HTMLElement>;
}

const RighteousText = forwardRef<HTMLElement, RighteousTextProps>(
  ({ tag: Tag, children, className }, ref: Ref<HTMLElement>) => (
    <Tag className={[righteous.className, className].join(' ')} ref={ref}>
      {children}
    </Tag>
  )
);

RighteousText.displayName = 'RighteousText';

export default RighteousText;
