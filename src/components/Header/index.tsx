import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import './style.scss';
import { Discord, Twitter } from '../Icons';
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
        <BorderButton link="#" className="discord-btn py-1 flex">
          <Discord className="discord-icon" />
          Discord
        </BorderButton>
        <BorderButton link="#" className="x-btn py-1">
          <Twitter className="x-icon" />
          @cosplaytoken
        </BorderButton>
      </div>
    </header>
  );
}
