'use client';

import './style.scss';
import BasicSlider from '../Slider/BasicSlider';
import { motion } from 'framer-motion';

export default function Topics() {
  return (
    <section id="topics" className="l-section mb-20">
      <div className="l-inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <BasicSlider />
        </motion.div>
      </div>
    </section>
  );
}
