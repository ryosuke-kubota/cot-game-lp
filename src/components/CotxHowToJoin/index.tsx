'use client';
import RighteousText from '../Headings/RighteousText';
import GradButton from '../Buttons/GradButton';
import './style.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CotxHowToJoin() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      titleKey: 'cotx_step_1_title',
      descKey: 'cotx_step_1_desc',
      links: [
        { label: 'FG Wallet', url: 'https://fg-wallet.io/' },
        {
          label: 'Android: Google Play',
          url: 'https://play.google.com/store/apps/details?id=io.fgwallet.app',
        },
        {
          label: 'iOS: App Store',
          url: 'https://apps.apple.com/jp/app/fg-wallet-2/id6572291892?l=en-US',
        },
      ],
    },
    {
      number: '02',
      titleKey: 'cotx_step_2_title',
      descKey: 'cotx_step_2_desc',
    },
    {
      number: '03',
      titleKey: 'cotx_step_3_title',
      descKey: 'cotx_step_3_desc',
    },
  ];

  return (
    <section id="cotx-how-to-join">
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
            {t('cotx_how_to_join_title')}
          </RighteousText>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
              className="step-card mb-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="step-number">{step.number}</div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-pink-400">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-300 mb-2 text-sm md:text-base">
                    {t(step.descKey)}
                  </p>
                  {step.links && (
                    <div className="mt-4 space-y-2">
                      {step.links.map((link, linkIndex) => (
                        <div key={linkIndex}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-2"
                          >
                            <span>👉</span> {link.label}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 max-w-xs mx-auto"
        >
          <GradButton link="https://fg-wallet.io/" target="_blank">
            <span className="flex items-center gap-2">
              Download FG Wallet
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
        </motion.div>
      </div>
    </section>
  );
}
