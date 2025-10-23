'use client';

import GradButton from '../Buttons/GradButton';
import BorderButton from '../Buttons/BorderButton';
import RighteousText from '../Headings/RighteousText';
import { Twitter } from '../Icons';
import './style.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SNS() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { t } = useLanguage();

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
            {t('join_community')}
          </RighteousText>
        </motion.div>

        <motion.p
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('community_description')
            .split('\n')
            .map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-4 md:gap-8 w-full max-w-[70%] md:max-w-none"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* テレグラムボタンを大きく目立たせる */}
          <GradButton
            link="https://t.me/cotgame_gg"
            target="_blank"
            className="join-discord-btn w-full md:w-auto text-xs md:text-xl py-4 px-12"
          >
            <i className="fab fa-telegram mr-2 text-2xl"></i>
            JOIN COMMUNITY
          </GradButton>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
            <BorderButton
              link="https://x.com/cotgame_gg"
              target="_blank"
              className="join-discord-btn w-full h-full md:w-auto text-sm"
            >
              <Twitter className="x-icon mr-2" />
              TWITTER
            </BorderButton>
            <BorderButton
              link="https://www.youtube.com/@cotgame_gg"
              target="_blank"
              className="join-discord-btn w-full md:w-auto text-sm"
            >
              <i className="fab fa-youtube mr-2"></i>
              YOUTUBE
            </BorderButton>
            <BorderButton
              link="https://www.instagram.com/cotgame.gg"
              target="_blank"
              className="join-discord-btn w-full md:w-auto text-sm"
            >
              <i className="fab fa-instagram mr-2"></i>
              INSTAGRAM
            </BorderButton>
            <BorderButton
              link="https://www.facebook.com/share/1Cua6H1ymm/"
              target="_blank"
              className="join-discord-btn w-full md:w-auto text-sm"
            >
              <i className="fab fa-facebook mr-2"></i>
              FACEBOOK
            </BorderButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
