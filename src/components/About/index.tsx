import { useRef } from 'react';
import RighteousText from '../Headings/RighteousText';
import SocialButtons from '../SocialButtons';
import './style.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.config({ trialWarn: false });

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const aboutButtonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let splitText = new SplitText(aboutTextRef.current, {
      types: 'lines, words, chars',
      tagName: 'span',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      aboutTitleRef.current,
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
        splitText.lines,
        {
          y: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'Second.out',
          stagger: 0.1,
        },
        'same'
      )
      .from(
        aboutButtonsRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.1,
          ease: 'power2.out',
        },
        'same'
      );
  }, [aboutRef, aboutTitleRef, aboutTextRef, aboutButtonsRef]);

  return (
    <section id="about" ref={aboutRef}>
      <div className="inner text-center flex flex-col items-center justify-center py-24 px-4">
        <RighteousText
          tag="h2"
          className="text-5xl font-bold mb-12"
          ref={aboutTitleRef}
        >
          GuildQB
        </RighteousText>

        <p className="mb-12" ref={aboutTextRef}>
          Social Finance Limitedが運営するWeb3ゲームに特化した
          <br />
          ソーシャルWeb3プラットフォーム、およびゲームプレイヤーのコミュニティです。
          <br />
          2022年春に発足して以来、独自のメディア「Scholars Lab」をはじめ、
          <br />
          InstagramやTwitterでWeb3ゲームの情報を発信してきました。
          <br />
          さらに、独自のメタバースプラットフォーム「QB Metaverse
          City(仮)」の開発と、
          <br />
          2023年2月の初のNFTコレクション「如月-KISARAGI-」のリリースを実施しました。
        </p>

        <div ref={aboutButtonsRef}>
          <SocialButtons />
        </div>
      </div>
    </section>
  );
}
