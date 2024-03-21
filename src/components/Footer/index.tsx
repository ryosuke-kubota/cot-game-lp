import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import './style.scss';
import { Discord, Twitter } from '../Icons';
import SocialButtons from '../SocialButtons';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner text-center flex flex-row items-end justify-between py-12 px-4">
        <div>
          <div className="mb-10">
            <Image
              src="/assets/images/logo.png"
              alt="GuildQB"
              className="logo mb-4"
              width={140}
              height={30}
            />
            <p>テキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div className="flex gap-10 text-left">
            <div>
              <h5>QB SOLUTIONS</h5>
              <ul>
                <li>AAAAAAA</li>
                <li>AAAAAAA</li>
              </ul>
            </div>
            <div>
              <h5>DOGS -WP</h5>
              <ul>
                <li>AAAAAAA</li>
                <li>AAAAAAA</li>
              </ul>
            </div>
            <div>
              <h5>OTHERS</h5>
              <ul>
                <li>AAAAAAA</li>
                <li>AAAAAAA</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
}
