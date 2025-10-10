'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Stuts() {
  const [statsT, setStatsT] = useState(0);
  const [statsD, setStatsD] = useState(0);
  const [statsY, setStatsY] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Animate Twitter followers
      let tCount = 0;
      const tInterval = setInterval(() => {
        tCount += 2;
        if (tCount >= 100) {
          tCount = 100;
          clearInterval(tInterval);
        }
        setStatsT(tCount);
      }, 40);

      // Animate Discord community
      let dCount = 0;
      const dInterval = setInterval(() => {
        dCount += 1;
        if (dCount >= 50) {
          dCount = 50;
          clearInterval(dInterval);
        }
        setStatsD(dCount);
      }, 40);

      // Animate Youtube subscribers
      let yCount = 0;
      const yInterval = setInterval(() => {
        yCount += 0.2;
        if (yCount >= 10) {
          yCount = 10;
          clearInterval(yInterval);
        }
        setStatsY(Math.round(yCount * 10) / 10);
      }, 40);

      return () => {
        clearInterval(tInterval);
        clearInterval(dInterval);
        clearInterval(yInterval);
      };
    }
  }, [isInView]);

  return (
    <section id="stuts" ref={ref}>
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
              <span className="number">{statsT}k</span>
              <span>
                Twitter
                <br />
                Followe
              </span>
            </div>
            <div className="stuts-number">
              <span className="number number-2">{statsD}k</span>
              <span>
                Discord
                <br />
                Community
              </span>
            </div>
            <div className="stuts-number">
              <span className="number number-2">{statsY}m</span>
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
