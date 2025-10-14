import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import './style.scss';
import { Discord, Twitter } from '../Icons';
import SocialButtons from '../SocialButtons';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner text-center flex flex-col md:flex-row items-center md:items-end justify-between py-8 md:py-12 px-4 gap-6 md:gap-0">
        <div className="mb-0 md:mb-10">
          <p className="text-whtie font-bold text-lg md:text-xl">
            Cosplay Battles
          </p>
        </div>
        <div className="flex gap-6 md:gap-10 text-left">
          <div>
            <h5 className="text-sm md:text-base"> Links</h5>
            <div className="flex gap-6">
              <ul className="text-sm md:text-base">
                <li>
                  <a href="#game-rules">Game Rules</a>
                </li>
                <li>
                  <a href="#cosplayers">Cosplayers</a>
                </li>
              </ul>
              <ul className="text-sm md:text-base">
                <li>
                  <a href="#leaderboard">Leaderboard</a>
                </li>
                <li>
                  <a href="#partners">Partners</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div>
          <SocialButtons />
        </div> */}
      </div>
    </footer>
  );
}
