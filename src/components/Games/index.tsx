import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import ImageSlider from '../Slider/ImageSlider';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Games() {
  const gamesRef = useRef<HTMLDivElement>(null);
  const gamesTitleRef = useRef<HTMLDivElement>(null);
  const gamesTextRef = useRef<HTMLDivElement>(null);
  const gamesListRef = useRef<HTMLDivElement>(null);
  const gamesSlideRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gamesRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      gamesTitleRef.current,
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
        gamesTextRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
        },
        'same'
      );

    if (gamesListRef.current?.children) {
      tl.from(
        gamesListRef.current.children,
        {
          duration: 0.3,
          scale: 0,
          delay: 0.3,
          stagger: 0.125,
        },
        'same'
      );
    }

    tl.from(
      gamesSlideRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.4,
        ease: 'power2.out',
      },
      'same'
    );
  }, [gamesRef, gamesTitleRef, gamesTextRef, gamesListRef, gamesSlideRef]);

  return (
    <section id="games" ref={gamesRef}>
      <div className="inner text-center py-20 px-4">
        <RighteousText
          tag="h2"
          className="text-5xl font-bold mb-12"
          ref={gamesTitleRef}
        >
          QB GAMES
        </RighteousText>
        <p className="mb-16" ref={gamesTextRef}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
          <br />
          キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div
          className="game-list flex items-center justify-center gap-5 gap-y-12 mb-16"
          ref={gamesListRef}
        >
          <div className="game w-1/4 flex flex-col items-center justify-center">
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </div>
          <div className="game w-1/4 flex flex-col items-center justify-center">
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </div>
          <div className="game w-1/4 flex flex-col items-center justify-center">
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </div>
          <div className="game w-1/4 flex flex-col items-center justify-center">
            <Image
              src={'/assets/images/games-img01.png'}
              width={'100'}
              height={'100'}
              alt={'KISARAGI'}
            ></Image>
            <RighteousText tag="div" className="game-label">
              QB ORIGINAL
            </RighteousText>
          </div>
        </div>

        <div ref={gamesSlideRef}>
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}
