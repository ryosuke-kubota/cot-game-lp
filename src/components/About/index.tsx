import { useRef } from 'react';
import RighteousText from '../Headings/RighteousText';
import SocialButtons from '../SocialButtons';
import './style.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.config({ trialWarn: false } as any);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLDivElement>(null);
  const aboutVideoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      aboutTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
      },
      'same'
    ).from(
      aboutVideoRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out',
      },
      'same'
    );
  }, [aboutRef, aboutTitleRef, aboutVideoRef]);

  return (
    <section id="about" ref={aboutRef}>
      <div className="inner text-center flex flex-col items-center justify-center py-24 px-4">
        <RighteousText
          tag="h2"
          className="text-3xl md:text-5xl font-bold mb-12"
          ref={aboutTitleRef}
        >
          ABOUT COT GAME
        </RighteousText>

        <div className="video-container w-full max-w-4xl" ref={aboutVideoRef}>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="COT Game Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
