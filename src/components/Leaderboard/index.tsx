'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import { motion } from 'framer-motion';

export default function Leaderboard() {
  return (
    <section id="leaderboard">
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
            LEADERBOARD
          </RighteousText>
        </motion.div>

        <motion.div
          className="leaderboard-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="https://cosplay-games.com/user/leaderboard?type=all-time-winners"
            className="leaderboard-iframe"
            title="Leaderboard"
          />
        </motion.div>
      </div>
    </section>
  );
}
