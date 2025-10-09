import './style.scss';
import RighteousText from '../Headings/RighteousText';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Leaderboard() {
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const leaderboardTitleRef = useRef<HTMLDivElement>(null);
  const leaderboardContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leaderboardRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      leaderboardTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
      },
      'same'
    ).from(
      leaderboardContentRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out',
      },
      'same'
    );
  }, [leaderboardRef, leaderboardTitleRef, leaderboardContentRef]);

  return (
    <section id="leaderboard" ref={leaderboardRef}>
      <div className="inner text-center py-20 px-4">
        <RighteousText
          tag="h2"
          className="text-5xl font-bold mb-12"
          ref={leaderboardTitleRef}
        >
          LEADERBOARD
        </RighteousText>

        <div ref={leaderboardContentRef} className="leaderboard-container">
          <iframe
            src="https://cosplay-games.com/user/leaderboard?type=all-time-winners"
            className="leaderboard-iframe"
            title="Leaderboard"
          />
        </div>
      </div>
    </section>
  );
}
