import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Solutions() {
  const solutionsRef = useRef<HTMLDivElement>(null);
  const solutionsListRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: solutionsRef.current,
        start: 'top-=50 center',
        once: true,
        markers: false,
      },
    });

    if (solutionsListRef.current?.children) {
      tl.from(solutionsListRef.current.children, {
        duration: 0.3,
        scale: 0,
        delay: 0.2,
        stagger: 0.125,
      });
    }
  }, [solutionsRef, solutionsListRef]);

  return (
    <section id="solutions" ref={solutionsRef}>
      <div className="inner text-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB SOLUTIONS
        </RighteousText>
        <p className="mb-12">
          「KISARAGI」は、NFTゲームに特化したソーシャルWeb3プラットフォームであり、
          <br />
          NFTゲームプレイヤーのコミュニティであるCosplay TokenがリリースするBFTです。
        </p>
        <div
          className="flex flex-wrap flex-row items-center justify-center gap-2 gap-y-12"
          ref={solutionsListRef}
        >
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
          <div className="solution w-1/6 flex flex-col items-center justify-center">
            <Image
              className="kisaragi-img"
              src={'/assets/images/solution.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <h3 className="mb-4">QBGoldRush</h3>
            <p className="text-sm">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
            </p>
          </div>
        </div>

        <BorderButton link="#" className="x-btn py-1">
          View All
        </BorderButton>
      </div>
    </section>
  );
}
