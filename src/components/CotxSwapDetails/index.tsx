'use client';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CotxSwapDetails() {
  const { t } = useLanguage();

  const swapDetails = [
    {
      labelKey: 'cotx_swap_opens',
      valueKey: 'cotx_swap_opens_value',
    },
    {
      labelKey: 'cotx_swap_claim',
      valueKey: 'cotx_swap_claim_value',
    },
    {
      labelKey: 'cotx_swap_snapshot',
      valueKey: 'cotx_swap_snapshot_value',
    },
    {
      labelKey: 'cotx_swap_distribution',
      valueKey: 'cotx_swap_distribution_value',
    },
    {
      labelKey: 'cotx_swap_eligibility',
      valueKey: 'cotx_swap_eligibility_value',
    },
    {
      labelKey: 'cotx_swap_ratio',
      valueKey: 'cotx_swap_ratio_value',
    },
    {
      labelKey: 'cotx_swap_current_chain',
      valueKey: 'cotx_swap_current_chain_value',
    },
    {
      labelKey: 'cotx_swap_new_chain',
      valueKey: 'cotx_swap_new_chain_value',
    },
  ];

  return (
    <section id="cotx-swap-details">
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
            {t('cotx_swap_details_title')}
          </RighteousText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-purple-900/50">
                  <th className="border border-purple-500 p-4 text-sm md:text-base">
                    {t('cotx_swap_item')}
                  </th>
                  <th className="border border-purple-500 p-4 text-sm md:text-base">
                    {t('cotx_swap_detail')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {swapDetails.map((detail, index) => (
                  <tr key={index}>
                    <td className="border border-purple-500 p-4 text-xs md:text-base whitespace-nowrap">
                      <div className="font-bold text-pink-400">
                        {t(detail.labelKey)}
                      </div>
                    </td>
                    <td className="border border-purple-500 p-4 text-sm md:text-base">
                      <div>{t(detail.valueKey)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-red-900/20 border border-red-500 rounded-lg text-left">
            <p className="text-red-400 font-bold mb-2">
              {t('cotx_swap_warning_title')}
            </p>
            <p className="text-sm md:text-base text-gray-300">
              {t('cotx_swap_warning')}
            </p>
          </div>

          <div className="mt-8 p-6 bg-purple-900/20 border border-purple-500 rounded-lg text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-pink-400">
              {t('cotx_swap_exchanges_title')}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold">BTSE</p>
                <p className="text-sm text-gray-400">COT/USDT</p>
                <a
                  href="https://www.btse.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  https://www.btse.com/
                </a>
              </div>
              <div>
                <p className="font-bold">Zaif</p>
                <p className="text-sm text-gray-400">COT/JPY</p>
                <a
                  href="https://zaif.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  https://zaif.jp/
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
