import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import './style.scss';
import { Discord, Twitter } from '../Icons';
import SocialButtons from '../SocialButtons';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner text-center flex flex-row items-end justify-between py-12 px-4">
        <div className="mb-10">
          <p className="text-whtie font-bold text-xl">Cosplay Battles</p>
        </div>
        <div className="flex gap-10 text-left">
          <div>
            <h5> Links</h5>
            <ul>
              <li>Game Rules</li>
              <li>Cosplayers</li>
              <li>Leaderboard</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        <div>
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
}
