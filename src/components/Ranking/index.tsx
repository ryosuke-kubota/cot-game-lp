'use client';

import './style.scss';
import RighteousText from '../Headings/RighteousText';
import TopGamesTable from './TopGamesTable';
import { motion } from 'framer-motion';

export default function Ranking() {
  return (
    <section id="ranking">
      <div className="inner text-center py-20 px-12">
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
            LEADERBOARD
          </RighteousText>
        </motion.div>
        <motion.p
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          COTゲームのトッププレイヤーランキング
          <br />
          ランキング上位者には特別な報酬が用意されています
        </motion.p>

        <TopGamesTable />
      </div>
    </section>
  );
}
