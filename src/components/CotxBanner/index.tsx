'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import './style.scss';

export default function CotxBanner() {
  const { t } = useLanguage();

  return (
    <section id="cotx-banner">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/cotx" className="cotx-banner-link">
            <div className="banner-content">
              <div className="banner-icon">⚠️</div>
              <div className="banner-text">
                <h3 className="banner-title">{t('cotx_banner_title')}</h3>
                <p className="banner-description">
                  {t('cotx_banner_description')}
                </p>
              </div>
              <div className="banner-arrow">→</div>
              <span className="banner-tap-hint">{t('cotx_banner_tap_hint')}</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
