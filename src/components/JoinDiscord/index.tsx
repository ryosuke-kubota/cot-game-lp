import GradButton from '../Buttons/GradButton';
import RighteousText from '../Headings/RighteousText';
import './style.scss';

export default function JoinDiscord() {
  return (
    <section id="join-discord">
      <div className="inner text-center flex flex-col items-center justify-center py-20 px-4">
        <RighteousText tag="h2" className="text-5xl font-bold mb-12">
          QB COMMUNITY
        </RighteousText>

        <p className="mb-12">
          GuildQBのコミュニティに参加することで、
          <br />
          様々なブロックチェーンゲームのはじめ方や攻略法を共有する仲間を見つけることができます。
          <br />
          ブロックチェーンゲームの最新情報を今すぐチェック！
        </p>

        <GradButton link="#" text="JOIN DISCORD" className="join-discord-btn" />
      </div>
    </section>
  );
}
