import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import GradButton from '../Buttons/GradButton';
import './style.scss';
import RighteousText from '../Headings/RighteousText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);
gsap.config({ trialWarn: false });

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  // const heroSubTextRef = useRef<HTMLDivElement>(null);
  // const descriptionTextRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(heroRef.current, { css: { visibility: 'visible' } });
    },
    { scope: heroRef }
  );

  useGSAP(
    () => {
      gsap.from(
        heroTextRef.current,
        {
          opacity: 0,
          duration: 2,
        },
        0.5
      );
    },
    { scope: heroTextRef }
  );
  useGSAP(
    () => {
      gsap.set(buttonsRef.current, { css: { opacity: 1, x: 0 } });
      gsap.from(
        buttonsRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 1,
        },
        1
      );
    },
    { scope: buttonsRef }
  );

  useGSAP(
    () => {
      gsap.set(imageRef.current, { css: { opacity: 1, x: 0 } });
      gsap.from(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        1
      );
    },
    { scope: imageRef }
  );

  return (
    <section
      id="hero"
      className="flex justify-center items-center py-20"
      ref={heroRef}
    >
      <div className="left px-24 w-1/2">
        <RighteousText
          tag="h1"
          className="text-6xl font-bold mb-6"
          ref={heroTextRef}
        >
          <span>Cosplay</span> Battles
        </RighteousText>

        <div className="flex justify-start space-x-4" ref={buttonsRef}>
          <GradButton link="#">Cosplay GAME</GradButton>
          <BorderButton link="#">Whitepaper</BorderButton>
        </div>
      </div>
      <div className="right w-1/2">
        <div ref={imageRef}>
          <Image
            src="/assets/images/banner.png"
            className="w-full"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
