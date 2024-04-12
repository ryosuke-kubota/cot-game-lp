import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Kisaragi() {
  const kisaragiRef = useRef<HTMLDivElement>(null);
  const kisaragiTitleRef = useRef<HTMLDivElement>(null);
  const kisaragiTextRef = useRef<HTMLDivElement>(null);
  const kisaragiImageContainerRef = useRef<HTMLDivElement>(null);
  const kisaragiImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // let splitText = new SplitText(kisaragiTextRef.current, {
    //   types: 'lines, words, chars',
    //   tagName: 'span',
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: kisaragiRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      kisaragiTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
      },
      'same'
    )
      .from(
        kisaragiTextRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
        },
        'same'
      )
      .set(
        kisaragiImageContainerRef.current,
        { css: { autoAlpha: 1, x: 0 } },
        'same'
      )
      .from(
        kisaragiImageContainerRef.current,
        {
          xPercent: 100,
          ease: 'Power2.out',
          delay: 0.2,
        },
        'same'
      )
      .from(
        kisaragiImageRef.current,
        {
          xPercent: -100,
          scale: 1.3,
          delay: 0.2,
          ease: 'Power2.out',
        },
        'same'
      );
  }, [
    kisaragiRef,
    kisaragiTitleRef,
    kisaragiTextRef,
    kisaragiImageContainerRef,
    kisaragiImageRef,
  ]);
  return (
    <section id="kisaragi" ref={kisaragiRef}>
      <div className="inner text-center">
        <div className="flex items-center">
          <div className="w-1/2 py-20 px-20">
            <RighteousText
              tag="h2"
              className="text-5xl font-bold mb-12"
              ref={kisaragiTitleRef}
            >
              如月 -KISARAGI-
            </RighteousText>
            <p className="mb-12 text-left" ref={kisaragiTextRef}>
              「KISARAGI」は、NFTゲームに特化したソーシャルWeb3プラットフォームであり、NFTゲームプレイヤーのコミュニティであるGuildQBがリリースするBFTです。
            </p>
          </div>
          <div className="w-1/2 kisaragi-bg">
            <div className="image-container" ref={kisaragiImageContainerRef}>
              <Image
                className="kisaragi-img"
                src={'/assets/images/kisaragi.png'}
                width={'100'}
                height={'100'}
                alt={'KISARAGI'}
                ref={kisaragiImageRef}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
