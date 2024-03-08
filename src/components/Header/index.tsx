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
      <div className="text-purple-500 font-bold text-xl">
        <Image
          src="/assets/images/logo.png"
          alt="GuildQB"
          className="logo"
          width={140}
          height={30}
        />
      </div>
      <div className="flex items-center items-center space-x-4">
        <BorderButton link="#" className="discord-btn py-1 flex">
          <Discord className="discord-icon" />
          Discord
        </BorderButton>
        <BorderButton link="#" className="x-btn py-1">
          <Twitter className="x-icon" />
          @GuildQB
        </BorderButton>
      </div>
    </header>
  );
}
