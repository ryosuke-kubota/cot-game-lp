import { Righteous } from 'next/font/google';
const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });
import './style.scss';
import { forwardRef, createElement } from 'react';

interface RighteousTextProps {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

const RighteousText = forwardRef<HTMLElement, RighteousTextProps>(
  ({ tag, children, className }, ref) => {
    return createElement(
      tag,
      {
        className: [righteous.className, className].join(' '),
        ref: ref as any,
      },
      children
    );
  }
);

RighteousText.displayName = 'RighteousText';

export default RighteousText;
