'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import SquereSlider from '../Slider/SquereSlider';
import { motion } from 'framer-motion';

export default function News() {
  return (
    <section id="news">
      <div className="inner text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RighteousText tag="h2" className="text-5xl font-bold mb-12">
            QB NEWS
          </RighteousText>

          <SquereSlider />

          <BorderButton link="#" className="x-btn py-1">
            View All
          </BorderButton>
        </motion.div>
      </div>
    </section>
  );
}
