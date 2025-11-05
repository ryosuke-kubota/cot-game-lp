'use client';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface LinkItem {
  label: string;
  url: string;
  icon?: string;
}

interface LinkCategory {
  categoryKey: string;
  items: LinkItem[];
}

export default function CotxRelatedLinks() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { t } = useLanguage();

  const links: LinkCategory[] = [
    {
      categoryKey: 'cotx_official_sites',
      items: [
        { label: 'COT', url: 'https://cot.curecos.com/jp/' },
        { label: 'COTX', url: 'https://lp.cosplay-games.com/' },
        { label: 'GAMING GATEWAY', url: 'https://lp.gaming-gate.net' },
      ],
    },
    {
      categoryKey: 'cotx_community',
      items: [
        {
          label: 'X (Twitter)',
          url: 'https://twitter.com/cotgame_gg',
          icon: 'fab fa-twitter',
        },
        {
          label: 'Telegram',
          url: 'https://t.me/cotgame_gg',
          icon: 'fab fa-telegram',
        },
        {
          label: 'Facebook',
          url: 'https://www.facebook.com/share/1Cua6H1ymm/',
          icon: 'fab fa-facebook',
        },
        {
          label: 'Instagram',
          url: 'https://instagram.com/cotgame.gg',
          icon: 'fab fa-instagram',
        },
        {
          label: 'YouTube',
          url: 'https://youtube.com/@cotgame_gg',
          icon: 'fab fa-youtube',
        },
      ],
    },
  ];

  return (
    <section id="cotx-related-links">
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
            {t('cotx_related_links_title')}
          </RighteousText>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {links.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 * (categoryIndex + 2) }}
              className="link-category mb-12"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-pink-400">
                {t(category.categoryKey)}
              </h3>

              <div className="links-grid">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-card"
                  >
                    {item.icon && (
                      <i className={`${item.icon} text-2xl mb-2`}></i>
                    )}
                    <span className="link-label">{item.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 link-icon"
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
                  </a>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="company-info"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-pink-400">
              {t('cotx_company_info')}
            </h3>
            <div className="text-left text-gray-300 space-y-2">
              <p className="font-bold">GAMING GATEWAY SDN BHD</p>
              <p className="text-sm">
                Suite 33.09, Level 33, Menara Exchange 106, Tun Razak Exchange,
                <br />
                55188 Kuala Lumpur, Malaysia.
              </p>
              <p>
                <a
                  href="https://lp.gaming-gate.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  https://lp.gaming-gate.net
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
