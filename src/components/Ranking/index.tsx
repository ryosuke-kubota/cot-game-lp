import './style.scss';
import RighteousText from '../Headings/RighteousText';
import TopGamesTable from './TopGamesTable';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Ranking() {
  const rankingRef = useRef<HTMLDivElement>(null);
  const rankingTitleRef = useRef<HTMLDivElement>(null);
  const rankingTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rankingRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      rankingTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
      },
      'same'
    ).from(
      rankingTextRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out',
      },
      'same'
    );
  }, [rankingRef, rankingTitleRef, rankingTextRef]);
  return (
    <section id="ranking" ref={rankingRef}>
      <div className="inner text-center py-20 px-12">
        <RighteousText
          tag="h2"
          className="text-5xl font-bold mb-12"
          ref={rankingTitleRef}
        >
          Top Blockchain Games
        </RighteousText>
        <p className="mb-16" ref={rankingTextRef}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
          <br />
          キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>

        <TopGamesTable />
      </div>
    </section>
  );
}
