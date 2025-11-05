'use client';
import RighteousText from '../Headings/RighteousText';
import GradButton from '../Buttons/GradButton';
import './style.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CotxForCosplayers() {
  const { t } = useLanguage();

  return (
    <section id="cotx-for-cosplayers">
      <div className="inner text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RighteousText
            tag="h2"
            className="text-2xl md:text-5xl font-bold mb-12"
          >
            {t('cotx_for_cosplayers_title')}
          </RighteousText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="content-box">
            <div className="text-left space-y-6 text-gray-300">
              <div className="info-item">
                <p className="mb-2 text-sm md:text-base">
                  {t('cotx_cosplayers_info_1')}
                </p>
              </div>

              <div className="info-item">
                <p className="mb-2 text-sm md:text-base">
                  {t('cotx_cosplayers_info_2')}
                </p>
              </div>

              <div className="info-item">
                <p className="mb-2 text-sm md:text-base">
                  {t('cotx_cosplayers_info_3')}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
              <GradButton link="https://cosplay-games.com/" target="_blank">
                <span className="flex items-center gap-2">
                  Cosplay Battle
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </GradButton>
              <GradButton link="https://t.me/cotgame_gg" target="_blank">
                <span className="flex items-center gap-2">
                  <i className="fab fa-telegram"></i>
                  Join Telegram
                </span>
              </GradButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
