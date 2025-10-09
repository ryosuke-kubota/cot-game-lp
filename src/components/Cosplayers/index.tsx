import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import SquereSlider from '../Slider/SquereSlider';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Cosplayers() {
  const questRef = useRef<HTMLDivElement>(null);
  const questTitleRef = useRef<HTMLDivElement>(null);
  const questTextRef = useRef<HTMLDivElement>(null);
  const questSliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: questRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      questTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
      },
      'same'
    )
      .from(
        questTextRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
        },
        'same'
      )
      .from(
        questSliderRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.3,
          ease: 'power2.out',
        },
        'same'
      );
  }, [questRef, questTitleRef, questTextRef, questSliderRef]);

  return (
    <section id="quest" ref={questRef}>
      <div className="inner text-center py-20 px-4">
        <RighteousText
          tag="h2"
          className="text-5xl font-bold mb-12"
          ref={questTitleRef}
        >
          Cosplayers
        </RighteousText>
        {/* <p className="mb-12" ref={questTextRef}>
          Coplay Battlesに参加するコスプレイヤーたち。
        </p> */}

        <div ref={questSliderRef}>
          <SquereSlider />
        </div>
      </div>
    </section>
  );
}
