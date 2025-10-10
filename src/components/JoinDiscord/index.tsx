'use client';

import GradButton from '../Buttons/GradButton';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { motion } from 'framer-motion';

export default function JoinDiscord() {
  return (
    <section id="join-discord">
      <div className="inner text-center flex flex-col items-center justify-center py-20 px-4">
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
            JOIN OUR COMMUNITY
          </RighteousText>
        </motion.div>

        <motion.p
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          COTゲームの最新情報やイベント情報をSNSでチェック！
          <br />
          コミュニティに参加して、他のプレイヤーと交流しよう
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-6">
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-discord mr-2"></i>
              DISCORD
            </GradButton>
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-twitter mr-2"></i>
              TWITTER
            </GradButton>
          </div>
          <div className="flex gap-6">
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-instagram mr-2"></i>
              INSTAGRAM
            </GradButton>
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-telegram mr-2"></i>
              TELEGRAM
            </GradButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
