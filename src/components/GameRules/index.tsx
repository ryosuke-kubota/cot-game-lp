'use client';
import RighteousText from '../Headings/RighteousText';
import GradButton from '../Buttons/GradButton';
import './style.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// カードデータの翻訳キー
const cardData = [
  {
    name: 'Multiplier',
    scopeKey: 'one_vote',
    effectKey: 'card_multiplier_20_effect',
    exampleKey: 'card_multiplier_20_example',
  },
  {
    name: 'Multiplier',
    scopeKey: 'one_vote',
    effectKey: 'card_multiplier_50_effect',
    exampleKey: 'card_multiplier_50_example',
  },
  {
    name: 'Multiplier',
    scopeKey: 'one_vote',
    effectKey: 'card_multiplier_70_effect',
    exampleKey: 'card_multiplier_70_example',
  },
  {
    name: 'Multiplier',
    scopeKey: 'one_vote',
    effectKey: 'card_multiplier_100_effect',
    exampleKey: 'card_multiplier_100_example',
  },
  {
    name: 'Lucky streak',
    scopeKey: 'entire_battle',
    effectKey: 'card_lucky_streak_effect',
    exampleKey: 'card_lucky_streak_example',
  },
  {
    name: 'Refund',
    scopeKey: 'entire_battle',
    effectKey: 'card_refund_effect',
    exampleKey: 'card_refund_example',
  },
  {
    name: 'Thief',
    scopeKey: 'one_vote',
    effectKey: 'card_thief_effect',
    exampleKey: 'card_thief_example',
  },
  {
    name: 'Magnifying glass',
    scopeKey: 'entire_battle',
    effectKey: 'card_magnifying_glass_effect',
    exampleKey: 'card_magnifying_glass_example',
  },
  {
    name: 'Careless Gambler',
    scopeKey: 'entire_battle',
    effectKey: 'card_careless_gambler_effect',
    exampleKey: 'card_careless_gambler_example',
  },
];

export default function GameRules() {
  const { t } = useLanguage();

  return (
    <section id="game-rules">
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
            {t('game_rules')}
          </RighteousText>
        </motion.div>

        <div className="rules-content max-w-6xl mx-auto text-left">
          {/* ガチャシステム */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rule-section mb-12 text-sm md:text-base"
          >
            <div className="rule-card mb-6">
              <p className="text-gray-300 mb-4">{t('gacha_description_1')}</p>
              <p className="text-gray-300 mb-4">{t('gacha_description_2')}</p>
              <p className="text-gray-300">
                {t('gacha_description_3').replace(/\*\*/g, '')}
              </p>
            </div>
          </motion.div>

          {/* カードの種類と効果 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rule-section mb-12"
          >
            {/* Player Manual */}
            <h3 className="text-base md:text-2xl font-bold mb-6 text-pink-400">
              {t('player_manual')}
            </h3>
            <div className="flex justify-center mb-12">
              <GradButton link="https://cosplay-games.com/manual.pdf" target="_blank">
                <span className="flex items-center gap-2">
                  Player Manual
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
            </div>

            <h3 className="text-base md:text-2xl font-bold mb-6 text-pink-400">
              {t('gacha_rewards')}
            </h3>
            <p className="text-gray-300 mb-8 text-sm md:text-base">
              {t('gacha_rewards_description')}
            </p>

            {/* テーブル形式のカード一覧 */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs md:text-base">
                <thead>
                  <tr className="bg-purple-900/50">
                    <th className="border border-purple-500 p-4 text-left">
                      {t('card_name')}
                    </th>
                    <th className="border border-purple-500 p-4 text-left whitespace-nowrap">
                      {t('scope')}
                    </th>
                    <th className="border border-purple-500 p-4 text-left min-w-[600px] md:min-w-full">
                      {t('effect')}
                    </th>
                    <th className="border border-purple-500 p-4 text-left min-w-[600px] md:min-w-full">
                      {t('example')}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-base">
                  {cardData.map((card, index) => (
                    <tr key={index}>
                      <td className="border border-purple-500 p-4">
                        <strong>{card.name}</strong>
                      </td>
                      <td className="border border-purple-500 p-4 whitespace-nowrap">
                        {t(card.scopeKey)}
                      </td>
                      <td className="border border-purple-500 p-4">
                        {t(card.effectKey)
                          .split('\n')
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < t(card.effectKey).split('\n').length - 1 && (
                                <br />
                              )}
                            </span>
                          ))}
                      </td>
                      <td className="border border-purple-500 p-4">
                        {t(card.exampleKey)
                          .split('\n')
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                t(card.exampleKey).split('\n').length - 1 && (
                                <br />
                              )}
                            </span>
                          ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
