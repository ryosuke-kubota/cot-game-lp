import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';

export default function Stuts() {
  return (
    <section id="stuts">
      <div className="inner text-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB STUTS
        </RighteousText>
        <div className="stuts-card">
          <div className="stuts-image">
            <Image
              src="/assets/images/stuts.png"
              alt=""
              width={500}
              height={300}
            />
          </div>
          <div className="stuts-numbers">
            <div className="stuts-number">
              <span className="number">100k</span>
              <span>
                Twitter
                <br />
                Followe
              </span>
            </div>
            <div className="stuts-number">
              <span className="number">50k</span>
              <span>
                Discord
                <br />
                Community
              </span>
            </div>
            <div className="stuts-number">
              <span className="number">10m</span>
              <span>
                Youtube
                <br />
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
