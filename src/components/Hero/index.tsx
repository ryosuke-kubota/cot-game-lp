import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import GradButton from '../Buttons/GradButton';
import './style.scss';
import RighteousText from '../Headings/RighteousText';

export default function Hero() {
  return (
    <section id="hero" className="flex justify-center items-center py-20">
      <div className="left px-24 w-1/2">
        <RighteousText tag="h1" className="text-6xl font-bold mb-6">
          BLOCKCHAIN
          <br />
          GAMING <span>Guild QB</span>
        </RighteousText>

        <p className="text-3xl font-extralight mb-8">Quest&amp;Battle</p>
        <p className="mb-8">
          GuildQB is the singularity point from web 2.0 to web 3.0 as a
          blockchain gaming guild. It is a gaming DAO/community that supports
          the seamless transition to web 3.0 and the challenges of the new era.
        </p>
        <div className="flex justify-start space-x-4">
          <GradButton link="#" text="QB QUEST" />
          <BorderButton />
        </div>
      </div>
      <div className="right w-1/2">
        <Image
          src="/assets/images/main-img01.png"
          alt=""
          width={500}
          height={300}
        />
      </div>
    </section>
  );
}
