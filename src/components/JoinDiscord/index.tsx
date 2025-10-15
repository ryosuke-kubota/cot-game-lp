'use client';

import GradButton from '../Buttons/GradButton';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function JoinDiscord() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { t } = useLanguage();

  return (
    <section
      id="join-discord"
      style={{
        backgroundImage: `url('${basePath}/assets/images/bg/join-discord-bg.png')`,
      }}
    >
      <div className="inner text-center flex flex-col items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RighteousText tag="h2" className="text-5xl font-bold mb-12">
            {t('join_our_community')}
          </RighteousText>
        </motion.div>

        <motion.p
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('community_description').split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-6">
            <GradButton link="https://x.com/cotgame_gg" target="_blank" className="join-discord-btn">
              <i className="fab fa-x-twitter mr-2"></i>
              X
            </GradButton>
            <GradButton link="https://t.me/cotgame_gg" target="_blank" className="join-discord-btn">
              <i className="fab fa-telegram mr-2"></i>
              TELEGRAM
            </GradButton>
            <GradButton link="https://www.youtube.com/@cotgame_gg" target="_blank" className="join-discord-btn">
              <i className="fab fa-youtube mr-2"></i>
              YOUTUBE
            </GradButton>
          </div>
          <div className="flex gap-6">
            <GradButton link="https://www.instagram.com/cotgame_gg" target="_blank" className="join-discord-btn">
              <i className="fab fa-instagram mr-2"></i>
              INSTAGRAM
            </GradButton>
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-facebook mr-2"></i>
              FACEBOOK
            </GradButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
