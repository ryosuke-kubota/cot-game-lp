import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import SquereSlider from '../Slider/SquereSlider';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function News() {
  const newsRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: newsRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(newsRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.1,
      ease: 'power2.out',
    });
  }, [newsRef]);
  return (
    <section id="news" ref={newsRef}>
      <div className="inner text-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB NEWS
        </RighteousText>

        <SquereSlider />

        <BorderButton link="#" className="x-btn py-1">
          View All
        </BorderButton>
      </div>
    </section>
  );
}
