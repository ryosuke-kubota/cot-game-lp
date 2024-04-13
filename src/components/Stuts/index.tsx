import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Stuts() {
  const [statsT, setStatsT] = useState({ value: 0 });
  const [statsD, setStatsD] = useState({ value: 0 });
  const [statsY, setStatsY] = useState({ value: 0 });

  const stutsRef = useRef<HTMLDivElement>(null);
  // const stutsTRef = useRef<HTMLDivElement>(null);
  // const stutsDRef = useRef<HTMLDivElement>(null);
  // const stutsYRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stutsRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.to(
      statsT,
      {
        duration: 2,
        value: '+=100',
        roundProps: 'value',
        ease: 'none',
        onUpdate() {
          setStatsT({ value: statsT.value });
        },
      },
      'same'
    )
      .to(
        statsD,
        {
          duration: 2,
          value: '+=50',
          roundProps: 'value',
          ease: 'none',
          onUpdate() {
            setStatsD({ value: statsD.value });
          },
        },
        'same'
      )
      .to(
        statsY,
        {
          duration: 2,
          value: '+=10',
          roundProps: 'value',
          ease: 'none',
          onUpdate() {
            setStatsY({ value: statsY.value });
          },
        },
        'same'
      );
  }, [stutsRef]);

  return (
    <section id="stuts" ref={stutsRef}>
      <div className="inner text-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB STUTS
        </RighteousText>
        <div className="stuts-card">
          <div className="stuts-image">
            <Image
              src="/assets/images/stuts.png"
              alt=""
              width={500}
              height={300}
            />
          </div>
          <div className="stuts-numbers">
            <div className="stuts-number">
              <span className="number">{statsT.value}k</span>
              <span>
                Twitter
                <br />
                Followe
              </span>
            </div>
            <div className="stuts-number">
              <span className="number number-2">{statsD.value}k</span>
              <span>
                Discord
                <br />
                Community
              </span>
            </div>
            <div className="stuts-number">
              <span className="number number-2">{statsY.value}m</span>
              <span>
                Youtube
                <br />
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
