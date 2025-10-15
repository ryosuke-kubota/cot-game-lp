'use client';

import GradButton from '../Buttons/GradButton';
import RighteousText from '../Headings/RighteousText';
import { Twitter } from '../Icons';
import './style.scss';
import { motion } from 'framer-motion';

export default function SNS() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section
      id="join-discord"
      style={{
        backgroundImage: `url('${basePath}/assets/images/bg/sns-bg.png')`,
      }}
    >
      <div className="inner text-center flex flex-col items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RighteousText
            tag="h2"
            className="text-3xl md:ext-5xl font-bold mb-12"
          >
            JOIN COMMUNITY
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
          className="flex flex-col items-center gap-4 md:gap-8 w-full max-w-[70%] md:max-w-none"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
            <GradButton
              link="https://x.com/cotgame_gg"
              target="_blank"
              className="join-discord-btn w-full h-full md:w-auto"
            >
              <Twitter className="x-icon" />
            </GradButton>
            <GradButton
              link="https://t.me/cotgame_gg"
              target="_blank"
              className="join-discord-btn w-full md:w-auto"
            >
              <i className="fab fa-telegram mr-2"></i>
              TELEGRAM
            </GradButton>
            <GradButton
              link="https://www.youtube.com/@cotgame_gg"
              target="_blank"
              className="join-discord-btn w-full md:w-auto"
            >
              <i className="fab fa-youtube mr-2"></i>
              YOUTUBE
            </GradButton>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
            <GradButton
              link="https://www.instagram.com/cotgame_gg"
              target="_blank"
              className="join-discord-btn w-full md:w-auto"
            >
              <i className="fab fa-instagram mr-2"></i>
              INSTAGRAM
            </GradButton>
            <GradButton
              link="https://www.facebook.com/share/1Cua6H1ymm/"
              target="_blank"
              className="join-discord-btn w-full md:w-auto"
            >
              <i className="fab fa-facebook mr-2"></i>
              FACEBOOK
            </GradButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
