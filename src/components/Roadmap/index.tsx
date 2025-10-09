import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Roadmap() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const roadmapTitleRef = useRef<HTMLDivElement>(null);
  const roadmapTextRef = useRef<HTMLDivElement>(null);
  const roadmapImageRef = useRef<HTMLDivElement>(null);
  const roadmapListRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: roadmapRef.current,
        start: 'top center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      roadmapTitleRef.current,
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
        roadmapTextRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
        },
        'same'
      )
      .set(roadmapImageRef.current, { autoAlpha: 1 })
      .from(
        roadmapImageRef.current,
        {
          xPercent: -100,
          duration: 2,
          ease: 'Power2.out',
          delay: 0.3,
        },
        'same'
      )
      .from(
        roadmapImageRef.current?.children[0],
        {
          xPercent: 100,
          duration: 2,
          delay: 0.3,
          ease: 'Power2.out',
        },
        'same'
      )
      .from(
        roadmapListRef.current?.children,
        {
          duration: 0.5,
          y: 50,
          opacity: 0,
          delay: 0.3,
          stagger: 0.5,
        },
        'same'
      );
  }, [
    roadmapRef,
    roadmapTitleRef,
    roadmapTextRef,
    roadmapImageRef,
    roadmapListRef,
  ]);
  return (
    <section id="roadmap" ref={roadmapRef}>
      <div className="inner text-center py-20 px-12">
        <RighteousText
          tag="h2"
          className="text-5xl font-bold mb-12"
          ref={roadmapTitleRef}
        >
          Roadmap
        </RighteousText>
        <p className="" ref={roadmapTextRef}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
          <br />
          キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div
          className="w-[80%] m-auto overflow-hidden invisible"
          ref={roadmapImageRef}
        >
          <Image
            className="roadmap-img"
            src={'/assets/images/roadmap.png'}
            width={'369'}
            height={'1422'}
            alt={'Roadmap'}
          ></Image>
        </div>
        <div className="roadmap-list flex gap-20" ref={roadmapListRef}>
          <div className="roadmap-item roadmap-item-1 w-1/4">
            <div className="roadmap-item-title flex justify-start items-center">
              <RighteousText tag="div" className="roadmap-item-title-number">
                1
              </RighteousText>
              <div className="text-left">
                <RighteousText tag="div" className="roadmap-item-title-label">
                  Phase
                </RighteousText>
                <div className="roadmap-item-title-sub">初期構築段階</div>
              </div>
            </div>
            <div className="roadmap-item-content">
              <ul>
                <li>
                  <span>
                    Cosplay Tokenコミュニティがソーシャルクリエーションを開始
                  </span>
                </li>
                <li>
                  <span>ゲーミングギルドとの提携</span>
                </li>
                <li>
                  <span>GameFi/P2Eとの提携</span>
                </li>
                <li>
                  <span>アクシーオリジン - 世界初のギルド大会に協賛</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="roadmap-item roadmap-item-2 w-1/4">
            <div className="roadmap-item-title flex justify-start items-center">
              <RighteousText tag="div" className="roadmap-item-title-number">
                2
              </RighteousText>
              <div className="text-left">
                <RighteousText tag="div" className="roadmap-item-title-label">
                  Phase
                </RighteousText>
                <div className="roadmap-item-title-sub">発売開始時期</div>
              </div>
            </div>
            <div className="roadmap-item-content">
              <ul>
                <li>
                  <span>NFTの公式発表</span>
                </li>
                <li>
                  <span>ホワイトペーパーを公開</span>
                </li>
                <li>
                  <span>東京ゲームショウ2022に出典</span>
                </li>
                <li>
                  <span>日本初のAxieプロゲームチームを創設/世界1位を獲得</span>
                </li>
                <li>
                  <span>オフィシャルサイト公開</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="roadmap-item roadmap-item-3 w-1/4">
            <div className="roadmap-item-title flex justify-start items-center">
              <RighteousText tag="div" className="roadmap-item-title-number">
                3
              </RighteousText>
              <div className="text-left">
                <RighteousText tag="div" className="roadmap-item-title-label">
                  Phase
                </RighteousText>
                <div className="roadmap-item-title-sub">R&D開発フェーズ</div>
              </div>
            </div>
            <div className="roadmap-item-content">
              <ul>
                <li>
                  <span>NFTユーティリティを実装</span>
                </li>
                <li>
                  <span>OHARAINFT</span>
                </li>
                <li>
                  <span>ユーザーミッションページ公開(QBクエスト)</span>
                </li>
                <li>
                  <span>$QB/GQB ローンチ</span>
                </li>
                <li>
                  <span>IGO/INO QBローンチパッド</span>
                </li>
                <li>
                  <span>SocialFiの製品開発</span>
                </li>
                <li>
                  <span>ノードリワードシステム</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="roadmap-item roadmap-item-4 w-1/4">
            <div className="roadmap-item-title flex justify-start items-center">
              <RighteousText tag="div" className="roadmap-item-title-number">
                4
              </RighteousText>
              <div className="text-left">
                <RighteousText tag="div" className="roadmap-item-title-label">
                  Phase
                </RighteousText>
                <div className="roadmap-item-title-sub">
                  アドバンスドビルドフェーズ
                </div>
              </div>
            </div>
            <div className="roadmap-item-content">
              <ul>
                <li>
                  <span>FT/NFTを活用したQBオリジナル</span>
                </li>
                <li>
                  <span>web3ゲームのローンチ</span>
                </li>
                <li>
                  <span>DAO/オンチェーンガバナンス</span>
                </li>
                <li>
                  <span>マルチチェーン対応</span>
                </li>
                <li>
                  <span>Cosplay Token NFTFi</span>
                </li>
                <li>
                  <span>Cosplay Token Ventures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
