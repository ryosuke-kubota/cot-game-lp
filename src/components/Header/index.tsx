'use client';

import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import './style.scss';
import { Discord, Telegram, Twitter } from '../Icons';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header
      id="header"
      className="mx-auto px-4 flex justify-between items-center py-2 fixed w-full"
    >
      <div className="text-whtie font-bold text-xl">
        <h1>{t('cosplay_battles')}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="language-switcher flex gap-2">
          <button
            onClick={() => setLanguage('ja')}
            className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
          >
            JA
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          >
            EN
          </button>
        </div>
        <div className="flex items-center space-x-4 header-social-buttons">
          <BorderButton
            link="https://t.me/cotgame_gg"
            target="_blank"
            className="telegram-btn py-1"
          >
            <Telegram className="telegram-icon" />
            Telegram
          </BorderButton>
          <BorderButton
            link="https://x.com/cotgame_gg"
            target="_blank"
            className="x-btn py-1"
          >
            <Twitter className="x-icon" />
            @cotgame_gg
          </BorderButton>
        </div>
      </div>
    </header>
  );
}
