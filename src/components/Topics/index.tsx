import './style.scss';
import BasicSlider from '../Slider/BasicSlider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Topics() {
  const topicsRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(topicsRef.current, {
      scrollTrigger: {
        trigger: topicsRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.1,
      ease: 'power2.out',
    });
  }, [topicsRef]);
  return (
    <section id="topics" className="l-section mb-20" ref={topicsRef}>
      <div className="l-inner">
        <BasicSlider />
      </div>
    </section>
  );
}
