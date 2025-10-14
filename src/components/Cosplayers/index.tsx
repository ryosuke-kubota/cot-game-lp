'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import SquereSlider from '../Slider/SquereSlider';
import { motion } from 'framer-motion';

export default function Cosplayers() {
  return (
    <section id="cosplayers">
      <div className="inner text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RighteousText
            tag="h2"
            className="text-3xl md:text-5xl font-bold mb-12"
          >
            Cosplayers
          </RighteousText>
        </motion.div>
        {/* <motion.p
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Coplay Battlesに参加するコスプレイヤーたち。
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SquereSlider />
        </motion.div>
        <div className="max-w-3xl mx-auto flex justify-center items-center space-x-4 mt-[60px] md:mt-[120px]">
          <BorderButton
            link="https://cosplay-games.com/user/cosplayer"
            target="_blank"
            className="x-btn py-1"
          >
            View All
          </BorderButton>
        </div>
      </div>
    </section>
  );
}
