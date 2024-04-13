import GradButton from '../Buttons/GradButton';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function JoinDiscord() {
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
        markers: true,
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
          QB COMMUNITY
        </RighteousText>

        <p className="mb-12" ref={joinDiscordTextRef}>
          GuildQBのコミュニティに参加することで、
          <br />
          様々なブロックチェーンゲームのはじめ方や攻略法を共有する仲間を見つけることができます。
          <br />
          ブロックチェーンゲームの最新情報を今すぐチェック！
        </p>
        <div ref={joinDiscordButtonRef}>
          <GradButton link="#" className="join-discord-btn">
            JOIN DISCORD
          </GradButton>
        </div>
      </div>
    </section>
  );
}
