import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';

export default function Kisaragi() {
  return (
    <section id="kisaragi">
      <div className="inner text-center">
        <div className="flex items-center">
          <div className="w-1/2 py-20 px-20">
            <RighteousText tag="h2" className="text-5xl font-bold mb-12">
              如月 -KISARAGI-
            </RighteousText>
            <p className="mb-12 text-left">
              「KISARAGI」は、NFTゲームに特化したソーシャルWeb3プラットフォームであり、NFTゲームプレイヤーのコミュニティであるGuildQBがリリースするBFTです。
            </p>
          </div>
          <div className="w-1/2 kisaragi-bg">
            <Image
              className="kisaragi-img"
              src={'/assets/images/kisaragi.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
