import RighteousText from '../Headings/RighteousText';
import SocialButtons from '../SocialButtons';
import './style.scss';

export default function About() {
  return (
    <section id="about">
      <div className="inner text-center flex flex-col items-center justify-center py-24 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          GuildQB
        </RighteousText>

        <p className="mb-12">
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

        <SocialButtons />
      </div>
    </section>
  );
}
