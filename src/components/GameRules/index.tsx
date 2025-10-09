import { useRef } from 'react';
import RighteousText from '../Headings/RighteousText';
import './style.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GameRules() {
  const rulesRef = useRef<HTMLDivElement>(null);
  const rulesTitleRef = useRef<HTMLDivElement>(null);
  const rulesListRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rulesRef.current,
        start: 'top-=100 center',
        once: true,
        markers: false,
      },
    });

    tl.from(
      rulesTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
      },
      'same'
    ).from(
      rulesListRef.current?.children,
      {
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: 0.2,
      },
      'same'
    );
  }, [rulesRef, rulesTitleRef, rulesListRef]);

  return (
    <section id="game-rules" ref={rulesRef}>
      <div className="inner text-center py-20 px-4">
        <RighteousText
          tag="h2"
          className="text-5xl font-bold mb-12"
          ref={rulesTitleRef}
        >
          Game Rules
        </RighteousText>

        <div
          className="rules-content max-w-6xl mx-auto text-left"
          ref={rulesListRef}
        >
          {/* ガチャシステム */}
          <div className="rule-section mb-12">
            <div className="rule-card mb-6">
              <p className="text-gray-300 mb-4">
                プレイヤーはCOTポイントを使用してガチャを回し、追加ポイントやカードなどの様々な報酬を獲得できます。
              </p>
              <p className="text-gray-300 mb-4">
                毎日1回、ログインボーナスとして無料でガチャを回すことができます。
              </p>
              <p className="text-gray-300">
                サイドメニューから<strong>「Gacha」</strong>
                を選択してガチャ画面にアクセスできます。 ガチャは
                <strong>1回</strong>または<strong>10回</strong>
                まとめて回すことができます。
              </p>
            </div>
          </div>

          {/* カードの種類と効果 */}
          <div className="rule-section mb-12">
            <h3 className="text-3xl font-bold mb-6 text-pink-400">
              ガチャ報酬
            </h3>
            <p className="text-gray-300 mb-8">
              カードには様々な効果があり、より多くの報酬を獲得し、有利に進めることができます。賢く使いましょう！
            </p>

            {/* テーブル形式のカード一覧 */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-900/50">
                    <th className="border border-purple-500 p-4 text-left">
                      カード名
                    </th>
                    <th className="border border-purple-500 p-4 text-left whitespace-nowrap">
                      適用範囲
                    </th>
                    <th className="border border-purple-500 p-4 text-left">
                      効果
                    </th>
                    <th className="border border-purple-500 p-4 text-left">
                      例
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Multiplier +20% */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Multiplier</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">1回の投票</td>
                    <td className="border border-purple-500 p-4">
                      1回限り、プレイヤーの投票数を20%増加
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">
                      ユーザーが100ポイントで投票した場合、合計値は120ポイントになります。
                      <br />
                      ユーザーが4ポイントで投票した場合、合計値は4ポイントになります（0.2
                      × 4 &lt; 1のため）。
                    </td>
                  </tr>

                  {/* Multiplier +50% */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Multiplier</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">1回の投票</td>
                    <td className="border border-purple-500 p-4">
                      1回限り、プレイヤーの投票数を50%増加
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">
                      ユーザーが100ポイントで投票した場合、合計値は150ポイントになります。
                      <br />
                      ユーザーが4ポイントで投票した場合、合計値は6ポイントになります。
                    </td>
                  </tr>

                  {/* Multiplier +70% */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Multiplier</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">1回の投票</td>
                    <td className="border border-purple-500 p-4">
                      1回限り、プレイヤーの投票数を70%増加
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">
                      ユーザーが100ポイントで投票した場合、合計値は170ポイントになります。
                      <br />
                      ユーザーが4ポイントで投票した場合、合計値は6ポイントになります。
                    </td>
                  </tr>

                  {/* Multiplier +100% */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Multiplier</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">1回の投票</td>
                    <td className="border border-purple-500 p-4">
                      1回限り、プレイヤーの投票数を100%増加
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">
                      ユーザーが100ポイントで投票した場合、合計値は200ポイントになります。
                      <br />
                      ユーザーが4ポイントで投票した場合、合計値は8ポイントになります。
                    </td>
                  </tr>

                  {/* Lucky Streak */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Lucky streak</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">バトル全体</td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーがラッキープレイヤーになる確率を30%増加（賞金プールには影響しません）
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">
                      カード追加前：
                      <br />
                      UserA: 20ポイント、UserB: 30ポイント、UserC: 50ポイント
                      <br />
                      A: 20 / 100 ≈ 20%
                      <br />
                      B: 30 / 100 ≈ 30%
                      <br />
                      C: 50 / 100 ≈ 50%
                      <br />
                      <br />
                      カード追加後：
                      <br />
                      UserAは30%のラックブースト: 20 × 1.3 = 26
                      <br />
                      A: 26 / 106 ≈ 24.53%
                      <br />
                      B: 30 / 106 ≈ 28.30%
                      <br />
                      C: 50 / 106 ≈ 47.17%
                    </td>
                  </tr>

                  {/* Refund */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Refund</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">バトル全体</td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーがラッキープレイヤーに選ばれなかった場合、投票ポイントの合計の20%を返金
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">
                      ユーザーの総投票数が500で、ラッキー抽選に当たらなかった場合、100ポイント返金されます。
                      <br />
                      ユーザーの総投票数が521で、ラッキー抽選に当たらなかった場合、104ポイント返金されます。
                      <br />
                      ユーザーの総投票数が4で、ラッキー抽選に当たらなかった場合、(0.2
                      × 4) &lt; 1のため返金されません。
                    </td>
                  </tr>

                  {/* Thief */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Thief</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">1回の投票</td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーはこのカードを使用して、ベット額の10%を相手サイドの投票から奪うことができます
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">
                      <strong>ケース1:</strong>
                      <br />
                      PlayerAの合計は1000ポイント、PlayerBの合計は2000ポイント。
                      <br />
                      UserAが100ポイント + Thiefカードで投票、Thiefカード = 100
                      × 10% = 10ポイント。
                      <br />
                      PlayerBの2000ポイント &gt;
                      10ポイント、そのためThiefカードは10ポイントを奪います。
                      <br />
                      UserAは110ポイントを受け取ります。
                      <br />
                      PlayerAは現在1110ポイント、PlayerB (2000 - 10) =
                      1990ポイント。
                      <br />
                      ---
                      <br />
                      <strong>ケース2:</strong>
                      <br />
                      PlayerAは1000ポイント、PlayerBは5ポイント。
                      <br />
                      UserAが100ポイント + Thiefカードで投票、Thiefカード = 100
                      × 10% = 10ポイント。
                      <br />
                      PlayerBの5ポイント &lt;
                      10ポイント、そのためThiefカードは5ポイントを奪います。
                      <br />
                      UserAは105ポイントを受け取ります。
                      <br />
                      PlayerAは現在1105ポイント、PlayerB (5 - 5) = 0ポイント。
                    </td>
                  </tr>

                  {/* Magnifying glass */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Magnifying glass</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">バトル全体</td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーが両サイドの詳細情報を確認できるようになります
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">-</td>
                  </tr>

                  {/* Careless Gambler */}
                  <tr>
                    <td className="border border-purple-500 p-4">
                      <strong>Careless Gambler</strong>
                    </td>
                    <td className="border border-purple-500 p-4 whitespace-nowrap">バトル全体</td>
                    <td className="border border-purple-500 p-4">
                      プレイヤーがラッキープレイヤーに当選した場合、配当が100%増加しますが、投票手数料も50%増加します。（配当はすべての手数料を差し引いた後に2倍になります）
                    </td>
                    <td className="border border-purple-500 p-4 text-sm">
                      UserA: 20ポイント、UserB: 30ポイント、UserC: 50ポイント
                      <br />
                      <br />
                      <strong>ケース1:</strong>
                      <br />
                      UserAがカードを使用 (20 × 0.5) = 10ポイント
                      <br />
                      UserA: 10ポイント、UserB: 30ポイント、UserC: 50ポイント
                      <br />
                      UserAがラッキー抽選に当選した場合、受け取るポイントは (10
                      + 30 + 50) × 2 = 180ポイント
                      <br />
                      <br />
                      <strong>ケース2:</strong> 誰もカードを使用しない
                      <br />
                      UserAがラッキー抽選に当選した場合、受け取るポイントは 20 +
                      30 + 50 = 100ポイント
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
