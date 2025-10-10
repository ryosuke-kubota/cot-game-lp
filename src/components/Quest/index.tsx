'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import SquereSlider from '../Slider/SquereSlider';
import { motion } from 'framer-motion';

export default function Quest() {
  return (
    <section id="quest">
      <div className="inner text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RighteousText
            tag="h2"
            className="text-5xl font-bold mb-12"
          >
            Quest
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
      </div>
    </section>
  );
}
