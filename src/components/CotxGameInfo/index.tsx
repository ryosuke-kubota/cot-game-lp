'use client';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CotxGameInfo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { t } = useLanguage();

  return (
    <section id="cotx-game-info">
      <div className="inner text-center flex flex-col items-center justify-center py-24 px-4">
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
            {t('cotx_about_cotx_title')}
          </RighteousText>
        </motion.div>

        <motion.div
          className="content-container max-w-4xl w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-left space-y-6 text-gray-300">
            <div className="section-box">
              <p className="mb-4 text-sm md:text-base">
                {t('cotx_about_cotx_desc_1')}
              </p>
            </div>

            <div className="section-box mt-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-pink-400">
                {t('cotx_about_battles_title')}
              </h3>
              <p className="mb-4 text-sm md:text-base">
                {t('cotx_about_battles_desc_1')}
              </p>
              <p className="mb-4 text-sm md:text-base">
                {t('cotx_about_battles_desc_2')}
              </p>
              <p className="text-sm text-gray-400">
                {t('cotx_about_battles_desc_note')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
