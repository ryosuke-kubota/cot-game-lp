import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import './style.scss';
import { Discord, Telegram, Twitter } from '../Icons';
export default function Header() {
  return (
    <header
      id="header"
      className="mx-auto px-4 flex justify-between items-center py-2 fixed w-full"
    >
      <div className="text-whtie font-bold text-xl">
        <h1>Cosplay Battles</h1>
      </div>
      <div className="flex items-center items-center space-x-4 header-social-buttons">
        <BorderButton link="#" className="telegram-btn py-1">
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
    </header>
  );
}
