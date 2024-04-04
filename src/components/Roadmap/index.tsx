import './style.scss';
import RighteousText from '../Headings/RighteousText';
import Image from 'next/image';
import BorderButton from '../Buttons/BorderButton';
import ImageSlider from '../Slider/ImageSlider';

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="inner text-center py-20 px-12">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          Roadmap
        </RighteousText>
        <p className="mb-16">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
          <br />
          キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="roadmap-list flex gap-20">
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
                    GuildQBコミュニティがソーシャルクリエーションを開始
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
                  <span>GuildQB NFTFi</span>
                </li>
                <li>
                  <span>GuildQB Ventures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
