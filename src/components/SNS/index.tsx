import GradButton from '../Buttons/GradButton';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function SNS() {
  const joinDiscordRef = useRef<HTMLDivElement>(null);
  const joinDiscordTitleRef = useRef<HTMLDivElement>(null);
  const joinDiscordTextRef = useRef<HTMLDivElement>(null);
  const joinDiscordButtonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: joinDiscordRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      joinDiscordTitleRef.current,
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
        joinDiscordTextRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
        },
        'same'
      )
      .from(
        joinDiscordButtonRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
        },
        'same'
      );
  }, [
    joinDiscordRef,
    joinDiscordTitleRef,
    joinDiscordTextRef,
    joinDiscordButtonRef,
  ]);
  return (
    <section id="join-discord" ref={joinDiscordRef}>
      <div className="inner text-center flex flex-col items-center justify-center py-20 px-4">
        <RighteousText
          tag="h2"
          className="text-5xl font-bold mb-12"
          ref={joinDiscordTitleRef}
        >
          JOIN OUR COMMUNITY
        </RighteousText>

        <p className="mb-12" ref={joinDiscordTextRef}>
          COTゲームの最新情報やイベント情報をSNSでチェック！
          <br />
          コミュニティに参加して、他のプレイヤーと交流しよう
        </p>
        <div
          ref={joinDiscordButtonRef}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex gap-6">
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-discord mr-2"></i>
              DISCORD
            </GradButton>
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-twitter mr-2"></i>
              TWITTER
            </GradButton>
          </div>
          <div className="flex gap-6">
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-instagram mr-2"></i>
              INSTAGRAM
            </GradButton>
            <GradButton link="#" className="join-discord-btn">
              <i className="fab fa-telegram mr-2"></i>
              TELEGRAM
            </GradButton>
          </div>
        </div>
      </div>
    </section>
  );
}
