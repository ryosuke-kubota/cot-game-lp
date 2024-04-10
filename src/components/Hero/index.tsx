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
  const heroSubTextRef = useRef<HTMLDivElement>(null);
  const descriptionTextRef = useRef<HTMLDivElement>(null);
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
      gsap.from(
        heroSubTextRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 1,
        },
        1
      );
    },
    { scope: heroSubTextRef }
  );
  useGSAP(
    () => {
      const mySplitText = new SplitText(descriptionTextRef.current, {
        type: 'words',
      });
      const splitTextTimeline = gsap.timeline();

      gsap.set(descriptionTextRef, { perspective: 400, autoAlpha: 0 });

      mySplitText.split({ type: 'chars, words, lines' });
      splitTextTimeline.from(
        mySplitText.chars,
        {
          duration: 0.2,
          autoAlpha: 0,
          scale: 4,
          force3D: true,
          stagger: 0.01,
        },
        1.5
      );
    },
    { scope: descriptionTextRef }
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
        3.5
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
        3.5
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
          BLOCKCHAIN
          <br />
          GAMING <span>Guild QB</span>
        </RighteousText>

        <p className="text-3xl font-extralight mb-8" ref={heroSubTextRef}>
          Quest&amp;Battle
        </p>
        <p className="mb-8" ref={descriptionTextRef}>
          GuildQB is the singularity point from web 2.0 to web 3.0 as a
          blockchain gaming guild. It is a gaming DAO/community that supports
          the seamless transition to web 3.0 and the challenges of the new era.
        </p>
        <div className="flex justify-start space-x-4" ref={buttonsRef}>
          <GradButton link="#">QB QUEST</GradButton>
          <BorderButton link="#">BLOCKCHAIN GAME</BorderButton>
        </div>
      </div>
      <div className="right w-1/2">
        <div ref={imageRef}>
          <Image
            src="/assets/images/main-img01.png"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
